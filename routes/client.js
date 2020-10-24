const express = require('express');
const router = express.Router();
const client = require('../controllers/client');

router.get('/', client);
router.get('/game', client);
router.get('/leaderboard', client);
router.get('/404', client);
