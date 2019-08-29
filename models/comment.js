var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    imgData: String,
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
    picto: {
        type: Schema.Types.ObjectId,
        ref: 'Picto'
    }
},{
    timestamps:true
});

module.exports = mongoose.model('Comment', commentSchema);