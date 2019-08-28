const User = require('../models/user');
const Picto = require('../models/picto');

module.exports = {
    index,
    newPicto,
    create
};

function index(req, res, next) {
    res.render('home/index', {
        user: req.user,
        name: req.user.name,
        profilePic: req.user.profilePic
    });
};

function newPicto(req, res, next){
    res.render('home/new');
};

function create(req, res, next){
    let dataURL = req.body.canvas.toDataUrl();
    var picto = new Picto({
        imgData: dataURL,
        creator: req.body.user
    });
    //save the new user
     //Runs when a user has logged in with OAuth
    picto.save(function(err){
        if(err) return cb(err);
        return cb(null, picto);
    });
    console.log(picto);
    res.redirect('home');
};