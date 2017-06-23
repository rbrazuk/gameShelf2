var mongoose = require('mongoose');

var gameSchema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    minPlayers : {
        type : Number, 
        min : 1
    },
    maxPlayers : {
        type : Number, 
        min : 1
    },
    playTime : {
        type : Number,
        min : 1
    },
    designers : [String],
    artists : [String],
    mechanics : [String],
    comment : String
});

mongoose.model('Game', gameSchema);