const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  IP: {
    type: String,
  },
  average_score: {
    type: Number,
    required: true,
  },
  max_level: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 20,
  },
  games_played: {
    type: Number,
    required: true,
  },
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
