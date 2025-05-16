
const express = require('express');
const router = express.Router();
const { getStreams, createStream } = require('../controllers/streamController');

// GET all streams
router.get('/', getStreams);

// POST a new stream
router.post('/', createStream);

module.exports = router;
