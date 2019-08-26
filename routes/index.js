var express = require('express');
var router = express.Router();
//will need to require passport since we are doing auth related things
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Google OAuth login route
router.get('/auth/google', passport.authenticate(
'google',
{scope: ['profile', 'email']}
));

router.get('/oauth2allback', passport.authenticate(
  'google',
  {
    successRedirect: '/users',
    failureRedirect: '/users'
  }
));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/users');
})

module.exports = router;
