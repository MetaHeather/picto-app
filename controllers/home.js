const Picto = require('../models/picto');


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
            return Picto.where("creator").ne(req.user.id).limit(10)
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





