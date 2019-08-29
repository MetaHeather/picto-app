const User = require('../models/user');
const Picto = require('../models/picto');


module.exports = {
    index
};

function index(req, res, next) {
    Picto.find({
        creator: req.user._id
    })
    .sort({createdAt: 'descending'})
    .then(function (pictos) {
        res.render('home/index', {
            user: req.user,
            name: req.user.name,
            profilePic: req.user.profilePic,
            pictos
        });
    })
    .catch(function(err){
        next(err);
    });
};
