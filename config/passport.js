//bring in the passport module.
var passport = require('passport');
//bring in the google oauth strategy
var GoogleStrategy = require('passport-google-oauth20').Strategy;
//get access to the User schema
var User = require('../models/user'); 


//new instance of Google Strategy - takes 2 arguments
//A reference object and a callback
passport.use(new GoogleStrategy(
    {
        //passport needs clientID to be typed out exactly
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK
    },
    function(accessToken, refreshToken, profile, cb){
        console.log('Inside passport function');
        User.findOne({'googleId': profile.id} , function(err, user){
            if(err) return cb(err);
            if(user) {//runs if user already exists in db
                return cb(null, user);
            } else {//runs if there is a first time user
                //Creates new user
                var newUser = new User({
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    googleId: profile.id,
                    photo: profile.photos[0].value
                });
                //save the new user
                 //Runs when a user has logged in with OAuth
                newUser.save(function(err){
                    if(err) return cb(err);
                    return cb(null, newUser);
                });
            }
        });
    }
));

//serializeUser tells passport what info to attatch to the session
passport.serializeUser(function(user, done){
    done(null, user.id);
});

passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        done(err, user);
    });
});