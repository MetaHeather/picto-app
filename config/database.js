var mongoose = require('mongoose');

mongoose.connect(process.env.SESSION_SECRET, { useNewUrlParser: true });

var db = mongoose.connection;

//console.log test for making sure connection to db is being made
db.on('connected', function() {
    console.log(`Mongoose connected to picto app database`);
});