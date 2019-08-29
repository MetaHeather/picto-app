const Picto = require('../models/picto');

module.exports = {
    newPicto,
    create
};

function newPicto(req, res, next){
    res.render('picto/new');
};

function create(req, res, next){
    console.log(req.body);
    console.log(req.body.dataURL);
    var picto = new Picto({
        imgData: req.body.dataURL,
        creator: req.user
    });
    picto.save(function(err){
        if(err) return res.redirect('/picto/new');
        res.redirect('/home');
    });

};