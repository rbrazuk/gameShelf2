var mongoose = require('mongoose');

var dbUrl = 'mongodb://localhost:27017/gameShelf';

mongoose.connect(dbUrl);

mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to ' + dbUrl);
});

mongoose.connection.on('error', function(err) {
    console.log("Mgonoose connection error: " + err);
});

process.on('SIGINT', function() {
    mongoose.connection.close(function() {
        console.log("Mongoose disconnected through app termination");
        process.exit(0);
    });
});

process.on('SIGTERM', function() {
    mongoose.connection.close(function() {
        console.log("Mongoose disconnected through app termination (SIGTERM)");
        process.exit(0);
    });
});

process.once('SIGUSR2', function() {
    mongoose.connection.close(function() {
        console.log("Mongoose disconnected through app termination (SIGUSR2)");
        process.kill(process.pid, 'SIGUSR2');
    });
});

// schema and models

require('./games.model.js');