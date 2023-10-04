const express = require('express');
const router = express.Router();
const chatbotController = require('../controllers/chatbotController');

// Define routes for chatbot-related functionality
router.post('/submitChat', chatbotController.submitChat);
router.get('/chatHistory', chatbotController.getChatHistory);
// ... (Previous code)

// Additional chatbot-related routes
router.get('/chatRequestHistory', chatbotController.getChatRequestHistory);
router.post('/approveChatRequest/:id', chatbotController.approveChatRequest);
// ... (Previous code)

// Additional chatbot-related routes
router.post('/rejectChatRequest/:id', chatbotController.rejectChatRequest);

module.exports = router;

module.exports = router;

module.exports = router;
