const Picto = require('../models/picto');
const Comment = require('../models/comment');

module.exports = {
    newComment,
    createComment
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

function createComment(req, res, next){
    //adds creator property to req.body and and assigns it to the user id
    req.body.creator = req.user._id;
    var comment = new Comment(req.body);
    comment.save(function(err){
        //iff error return a internal server error status
        if(err) return res.sendStatus(500);
        //sends a response so that fetch can complete and redirect
        res.sendStatus(200);
    });
}