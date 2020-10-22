const mongoose = require('mongoose');

const wordSchema = new mongoose.Schema({
  words: {
    type: Array,
    minlength: 10,
    maxlength: 10,
    required: true,
  },
});

const Word = mongoose.model('Word', wordSchema);

module.exports = Word;
