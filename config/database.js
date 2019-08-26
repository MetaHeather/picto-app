var mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

var db = mongoose.connection;

//console.log test for making sure connection to db is being made
db.on('connected', function() {
    console.log(`Mongoose connected to picto app database`);
});