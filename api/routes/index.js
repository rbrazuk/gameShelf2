var express = require('express');
var router = express.Router();

var ctrlGames = require('../controllers/games.controller.js');

router
    .route('/games')
    .get(ctrlGames.gamesGetAll);

router
    .route('/games/new')
    .post(ctrlGames.gamesAddOne);

module.exports = router;