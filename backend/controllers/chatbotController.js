const { pool, query } = require('./db'); // Import the database connection and query functions

// Create a new chat request
const createChatRequest = async (userId, message) => {
  try {
    const insertQuery = `
      INSERT INTO chat_requests (user_id, message)
      VALUES ($1, $2)
      RETURNING id;
    `;

    const values = [userId, message];
    const result = await query(insertQuery, values);

    return result.rows[0].id;
  } catch (error) {
    throw error;
  }
};

// Save a chat message to chat history
const saveChatMessage = async (chatRequestId, message, isSubadmin) => {
  try {
    const insertQuery = `
      INSERT INTO chat_history (chat_request_id, message, is_subadmin)
      VALUES ($1, $2, $3);
    `;

    const values = [chatRequestId, message, isSubadmin];
    await query(insertQuery, values);
  } catch (error) {
    throw error;
  }
};

// Send a chat message to subadmins
const sendChatMessageToSubadmins = async (message) => {
  try {
    // Replace this with logic to send the message to subadmins
    // You may use WebSocket, Socket.io, or other methods to achieve real-time communication
    console.log('Message sent to subadmins:', message);
  } catch (error) {
    throw error;
  }
};
const { pool, query } = require('./db'); // Import the database connection and query functions

// ... (previous code)

// Retrieve chat history by chat request ID
const getChatHistoryByRequest = async (chatRequestId) => {
  try {
    const selectQuery = `
      SELECT message, is_subadmin
      FROM chat_history
      WHERE chat_request_id = $1
      ORDER BY created_at;
    `;
    const result = await query(selectQuery, [chatRequestId]);

    return result.rows;
  } catch (error) {
    throw error;
  }
};

// Handle a chat request
const handleChatRequest = async (chatRequestId) => {
  try {
    // Fetch the chat request details by ID
    const selectRequestQuery = 'SELECT user_id, message FROM chat_requests WHERE id = $1;';
    const requestResult = await query(selectRequestQuery, [chatRequestId]);

    if (requestResult.rows.length === 0) {
      throw new Error('Chat request not found');
    }

    const chatRequest = requestResult.rows[0];
    const userId = chatRequest.user_id;
    const message = chatRequest.message;

    // Replace this with logic to handle the chat request, such as responding to user queries

    // Send a sample response to the user (replace with actual response logic)
    const userResponse = 'Thank you for your message. A subadmin will assist you shortly.';
    await saveChatMessage(chatRequestId, userResponse, false);

    // Send a notification to subadmins about the new chat request (replace with actual notification logic)
    const notificationMessage = `New chat request from user: ${userId}`;
    sendChatMessageToSubadmins(notificationMessage);
  } catch (error) {
    throw error;
  }
};
const { pool, query } = require('./db'); // Import the database connection and query functions

// ... (previous code)

// Get a list of active chat requests
const getActiveChatRequests = async () => {
  try {
    const selectQuery = `
      SELECT id, user_id, message, created_at
      FROM chat_requests
      WHERE handled = false
      ORDER BY created_at;
    `;
    const result = await query(selectQuery);

    return result.rows;
  } catch (error) {
    throw error;
  }
};

// Mark a chat request as handled
const markChatRequestAsHandled = async (chatRequestId) => {
  try {
    const updateQuery = 'UPDATE chat_requests SET handled = true WHERE id = $1;';
    await query(updateQuery, [chatRequestId]);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createChatRequest,
  saveChatMessage,
  sendChatMessageToSubadmins,
  getChatHistoryByRequest,
  handleChatRequest,
  getActiveChatRequests,
  markChatRequestAsHandled,
};


module.exports = {
  createChatRequest,
  saveChatMessage,
  sendChatMessageToSubadmins,
  getChatHistoryByRequest,
  handleChatRequest,
};


module.exports = { createChatRequest, saveChatMessage, sendChatMessageToSubadmins };
