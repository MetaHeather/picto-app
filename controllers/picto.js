const Picto = require('../models/picto');
const Comment = require('../models/comment');

module.exports = {
    newPicto,
    create,
    show,
    edit,
    update,
    deletePicto
};

function newPicto(req, res, next){
    res.render('picto/new');
};

function create(req, res, next){
    var picto = new Picto({
        imgData: req.body.dataURL,
        creator: req.user
    });
    picto.save(function(err){
        if(err) return res.redirect('/picto/new');
        res.redirect('/home');
    });

};

function show(req, res, next) {
    Picto.findById(req.params.id)
        .then(function (picto) {
            return Comment.find({
                    picto: picto._id
                })
                .then(function (comments) {
                    let isCurrentUser = (picto.creator.equals(req.user._id));
                    res.render('picto/show', {
                        user: req.user,
                        name: req.user.name,
                        profilePic: req.user.profilePic,
                        picto,
                        isCurrentUser,
                        comments
                    });
                });
        });
};

function edit(req, res, next) {
    Picto.findById(req.params.id)
        .then(function (picto) {
            res.render('picto/edit', {
                user: req.user,
                name: req.user.name,
                profilePic: req.user.profilePic,
                picto
            });
        })
};

function update(req, res, next) {
    Picto.findByIdAndUpdate(req.params.id, {imgData: req.body.dataURL}) 
    .then(function(picto){
        res.redirect(`/home`)
    });
}

function deletePicto(req, res, next) {
    Picto.findByIdAndDelete(req.params.id)
    .then(function(){
        Comment.deleteMany({picto: req.params.id})
        .then(function(){
            res.redirect('/home');  
        });
    }); 
};