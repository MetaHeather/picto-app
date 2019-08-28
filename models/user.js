var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    googleId: String,
    name: String,
    profilePic: String,
},{
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);