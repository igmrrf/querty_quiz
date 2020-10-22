const Word = require('../models/Word');

const route = require('express').Router();

route.get('/', async (req, res) => {
  console.log(req.body);
  const words = await Word.find();
  if (!words) return res.status(404).send('No Words Found');
  res.send(words);
});

route.post('/', async (req, res) => {
  console.log(req.body);
  const { words } = req.body;
  const existingWords = Word.find({ words });
  if (existingWords)
    return res
      .status(400)
      .send('Another array that consist of those words already exist');
  const word = new Word({
    words,
  });
  const saved = await word.save();
  res.send(201).send(saved);
});

module.exports = route;
