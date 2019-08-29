var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pictoSchema = new Schema({
  imgData: String,
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
},{
    timestamps: true
});



module.exports = mongoose.model('Picto', pictoSchema);