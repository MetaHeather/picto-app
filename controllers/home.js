const User = require('../models/user');
const Picto = require('../models/picto');

module.exports = {
    index
};

function index(req, res, next) {
    res.render('home/index', {
        user: req.user,
        name: req.user.name,
        profilePic: req.user.profilePic
    });
};

