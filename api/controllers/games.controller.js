var mongoose = require('mongoose');
var Game = mongoose.model('Game');

module.exports.gamesGetAll = function(req, res) {
    Game
        .find()
        .exec(function(err, games) {
            if (err) {
                console.log("Error finding games");
                res.status(500).json(err);
            } else {
                console.log("Found games", games.length);
                res.status(200).json(games);
            }
    });
};

module.exports.gamesAddOne = function(req, res) {
    var db = dbconn.get();
    var collection = db.collection('games');
    
    var newGame;
    
    console.log("POST new game");
    if (req.body && req.name) {
        newGame = req.body;
        
        collection.insertOne(newGame, function(err, response) {
           console.log(response.ops);
            res
                .status(201)
                .json(response.ops);
        });
    } else {
        console.log("Data missing from body");
        res
            .status(400)
            .json({
            message : "Required data missing from body"
        });
    }
};