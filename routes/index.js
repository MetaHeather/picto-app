var express = require('express');
var router = express.Router();
//userCtrl
var indexCtrl = require('../controllers/index');
//will need to require passport since we are doing auth related things
var passport = require('passport');

/* GET home page. */
router.get('/', indexCtrl.index);

//Google OAuth login route
router.get('/auth/google', passport.authenticate(
'google',
{scope: ['profile', 'email']}
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/home',
    failureRedirect: '/'
  }
));

//Function for checking if user is logged in or not
//can be used to keep user who isn't logged in from 
function isLoggedIn(req, res, next){
  if(req.isAuthenticated()) return next;
  res.redirect('/auth/google');
};

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
})

module.exports = router;
