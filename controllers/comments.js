const Picto = require('../models/picto');

module.exports = {
    newComment
};

function newComment(req, res, next){
    Picto.findById(
        req.params.id
    )
    .then(function (picto) {
                res.render('comments/new', {
                    user: req.user,
                    picto
                });
            })
    .catch(function (err) {
        next(err);
    });
};