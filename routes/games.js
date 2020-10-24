const Game = require('../models/Game');

const route = require('express').Router();

route.get('/', async (req, res) => {
  const games = await Game.find().sort('-average_score').limit(10);
  if (!games) return res.status(404).send('No games Found');
  return res.send(games);
});

route.post('/', async (req, res) => {
  console.log(req.body);
  const { IP, average_score, max_level, username, games_played } = req.body;
  const existingGame = await Game.find({ average_score, username });
  if (existingGame.length === 1)
    return res.send('You already have the same score saved, try playing again');
  const game = new Game({
    IP,
    games_played,
    max_level,
    average_score,
    username,
  });
  const saved = await game.save();
  return res.send(saved);
});

module.exports = route;
