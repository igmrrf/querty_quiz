const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const client = require('../controllers/client');
const error = require('../middlewares/error');
const Words = require('../routes/words');
const Games = require('../routes/games');

module.exports = function (app) {
  console.log('Calling on routes');
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cors());
  app.use('/api/words', Words);
  app.use('/api/games', Games);
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.use('/', client);
  app.use(error);
};
