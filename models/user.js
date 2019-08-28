var mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
    googleId: String,
    name: String,
    profilePic: String,
    Picto: [String]
},{
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);