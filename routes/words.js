const express = require('express');
const router = express.Router();
const Word = require('../models/Word');

router.get('/', async (req, res) => {
  console.log(req.body);
  const words = await Word.find();
  if (!words) return res.status(404).send('No Words Found');
  res.send(words);
});

router.post('/', async (req, res) => {
  console.log(req.body);
  const { words, level } = req.body;
  const existingWords = await Word.find({ level: level });
  if (existingWords.length > 0)
    return res.status(400).send('Words for this level already exist');
  const word = new Word({
    words,
    level,
  });
  const saved = await word.save();
  console.log(saved);
  res.send(201).send(saved);
});

module.exports = router;
