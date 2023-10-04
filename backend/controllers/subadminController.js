
const { Pool } = require('pg');

// Database connection setup
const pool = new Pool({
  connectionString: 'your_postgresql_connection_string_here',
});

// Create a new subadmin
const createSubadmin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const query = 'INSERT INTO subadmins (username, password) VALUES ($1, $2)';
    await pool.query(query, [username, password]);
    res.status(201).json({ message: 'Subadmin created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Authenticate subadmin login
const subadminLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const query = 'SELECT * FROM subadmins WHERE username = $1 AND password = $2';
    const result = await pool.query(query, [username, password]);
    const subadmin = result.rows[0];
    if (subadmin) {
      res.status(200).json({ message: 'Subadmin logged in successfully' });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};
// Create a new expense record
const createExpense = async (req, res) => {
    try {
      const { expenseType, amount, date, receiptImage } = req.body;
      const query = 'INSERT INTO expenses (expenseType, amount, date, receiptImage) VALUES ($1, $2, $3, $4)';
      await pool.query(query, [expenseType, amount, date, receiptImage]);
      res.status(201).json({ message: 'Expense record created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  };
  
  // View all expenses
  const getAllExpenses = async (req, res) => {
    try {
      const query = 'SELECT * FROM expenses';
      const result = await pool.query(query);
      const expenses = result.rows;
      res.status(200).json(expenses);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  };
  // Create a request to update an expense record
const requestExpenseUpdate = async (req, res) => {
    try {
      const { expenseId, updatedData } = req.body;
      const query = 'INSERT INTO expense_update_requests (expenseId, updatedData) VALUES ($1, $2)';
      await pool.query(query, [expenseId, updatedData]);
      res.status(201).json({ message: 'Expense update request submitted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  };
  
  // View all expense update requests
  const getAllExpenseUpdateRequests = async (req, res) => {
    try {
      const query = 'SELECT * FROM expense_update_requests';
      const result = await pool.query(query);
      const requests = result.rows;
      res.status(200).json(requests);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  };
  
  // Implement other subadmin-related functions...
  
  // Implement other subadmin-related functions...
  
  module.exports = {
    createSubadmin,
    subadminLogin,
    createExpense,
    getAllExpenses,
    // Add other subadmin-related functions here...
  };
  

// Implement other subadmin-related functions as needed...

// module.exports = {
//   createSubadmin,
//   subadminLogin,
//   // Add other subadmin-related functions here...
// };




// // Import necessary modules and models
// const Expense = require('../models/Expense');
// const Donation = require('../models/Donation');
// const ChatMessage = require('../models/ChatMessage');

// // View all expenses
// exports.viewAllExpenses = async (req, res) => {
//   try {
//     // Implement logic to retrieve and send all expenses to the client
//     const expenses = await Expense.find();
//     res.status(200).json(expenses);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// // Add a new expense
// exports.addExpense = async (req, res) => {
//   try {
//     // Extract data from the request body
//     const { type, amount, date, description, receiptImage } = req.body;
//     // Create a new Expense instance
//     const newExpense = new Expense({ type, amount, date, description, receiptImage });
//     // Save the new expense to the database
//     await newExpense.save();
//     res.status(201).json({ message: 'Expense added successfully' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// // View all donations
// exports.viewAllDonations = async (req, res) => {
//   try {
//     // Implement logic to retrieve and send all donations to the client
//     const donations = await Donation.find();
//     res.status(200).json(donations);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// // Add a new donation
// exports.addDonation = async (req, res) => {
//   try {
//     // Extract data from the request body
//     const { donorName, amount, date, receiptImage } = req.body;
//     // Create a new Donation instance
//     const newDonation = new Donation({ donorName, amount, date, receiptImage });
//     // Save the new donation to the database
//     await newDonation.save();
//     res.status(201).json({ message: 'Donation added successfully' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// // View all chat messages
// exports.viewAllChatMessages = async (req, res) => {
//   try {
//     // Implement logic to retrieve and send all chat messages to the client
//     const chatMessages = await ChatMessage.find();
//     res.status(200).json(chatMessages);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// // Send a new chat message
// exports.sendChatMessage = async (req, res) => {
//   try {
//     // Extract data from the request body
//     const { sender, messageText, timestamp } = req.body;
//     // Create a new ChatMessage instance
//     const newChatMessage = new ChatMessage({ sender, messageText, timestamp });
//     // Save the new chat message to the database
//     await newChatMessage.save();
//     res.status(201).json({ message: 'Chat message sent successfully' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// // Update an existing expense
// exports.updateExpense = async (req, res) => {
//   try {
//     // Extract data from the request body
//     const { id, type, amount, date, description, receiptImage } = req.body;
//     // Find the expense by ID and update its details
//     const updatedExpense = await Expense.findByIdAndUpdate(id, {
//       type,
//       amount,
//       date,
//       description,
//       receiptImage,
//     });
//     if (!updatedExpense) {
//       res.status(404).json({ error: 'Expense not found' });
//     } else {
//       res.status(200).json({ message: 'Expense updated successfully' });
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// // Delete an expense by ID
// exports.deleteExpense = async (req, res) => {
//   try {
//     // Extract the expense ID from the request parameters
//     const { id } = req.params;
//     // Find the expense by ID and remove it
//     const deletedExpense = await Expense.findByIdAndRemove(id);
//     if (!deletedExpense) {
//         res.status(404).json({ error: 'Expense not found' });
//       } else {
//         res.status(200).json({ message: 'Expense deleted successfully' });
//       }
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ error: 'Server error' });
//     }
//   };
  
//   // Implement more subadmin-related functions...