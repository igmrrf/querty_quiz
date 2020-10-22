const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const client = require('../controllers/client');
const error = require('../middlewares/error');
const levels = require('../utils/levels');

module.exports = function (app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cors());
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('/', client);
  app.get('/game', client);
  app.get('/leaderboard', client);
  app.get('/404', client);
  app.get('/levels', (req, res) => {
    return res.send(levels);
  });
  app.post('/words, WordsRoute');
  app.use(error);
};
