
const express = require('express');
const router = express.Router();
const { getChats, createChat, getChatMessages } = require('../controllers/chatController');

// GET all chats
router.get('/', getChats);

// POST a new chat
router.post('/', createChat);

// GET messages for a specific chat
router.get('/:id/messages', getChatMessages);

module.exports = router;
