const Picto = require('../models/picto');
const User = require('../models/user')

module.exports = {
    index
};

function index(req, res, next) {
    Picto.find({
            creator: req.user.id
        })
        .sort({
            createdAt: 'descending'
        })
        .then(function (pictos) {
            return Picto.where("creator").ne(req.user.id).limit(45).sort({
                createdAt: 'descending'
            }).populate('creator')
                .then(function (otherPictos) {
                    res.render('home/index', {
                        user: req.user,
                        name: req.user.name,
                        profilePic: req.user.profilePic,
                        pictos,
                        otherPictos
                    });
                })
                    })
        .catch(function (err) {
            next(err);
        });
};





