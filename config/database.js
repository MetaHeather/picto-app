var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pictoapp',
    {useNewUrlParser: true, useCreateIndex: true}
);

var db = mongoose.connection;

//console.log test for making sure connection to db is being made
db.on('connected', function() {
    console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});