var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require('method-override');
//Session middleware
var session = require('express-session');
//require passport
var passport = require('passport');
// load the env vars
require('dotenv').config();
//config for database
require('./config/database');
//configuration for passport
require('./config/passport');

var indexRouter = require('./routes/index');
var homeRouter = require('./routes/home');
var pictoRouter = require('./routes/picto');
var commentsRouter = require('./routes/comments');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
//mount session middelware for using passport
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

//mount passport
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/home', homeRouter);
app.use('/picto', pictoRouter);
app.use('/picto', commentsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
