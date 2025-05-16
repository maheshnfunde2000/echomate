
const express = require('express');
const router = express.Router();
const { getEchoes, createEcho } = require('../controllers/echoController');

// GET all echoes
router.get('/', getEchoes);

// POST a new echo
router.post('/', createEcho);

module.exports = router;
