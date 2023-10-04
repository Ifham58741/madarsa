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

// View all subadmins
const getAllSubadmins = async (req, res) => {
  try {
    const query = 'SELECT * FROM subadmins';
    const result = await pool.query(query);
    const subadmins = result.rows;
    res.status(200).json(subadmins);
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

// Implement other admin-related functions as needed...

// Update an existing subadmin
const updateSubadmin = async (req, res) => {
    try {
      const subadminId = req.params.id;
      const { username, password } = req.body;
      const query = 'UPDATE subadmins SET username = $1, password = $2 WHERE id = $3';
      await pool.query(query, [username, password, subadminId]);
      res.status(200).json({ message: 'Subadmin updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  };
  
  // Delete a subadmin by ID
  const deleteSubadminById = async (req, res) => {
    try {
      const subadminId = req.params.id;
      const query = 'DELETE FROM subadmins WHERE id = $1';
      await pool.query(query, [subadminId]);
      res.status(200).json({ message: 'Subadmin deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  };
  
//   // Create a new donation record
//   const createDonation = async (req, res) => {
//     try {
//       const { donorName, amount, date, receiptImage } = req.body;
//       const query = 'INSERT INTO donations (donorName, amount, date, receiptImage) VALUES ($1, $2, $3, $4)';
//       await pool.query(query, [donorName, amount, date, receiptImage]);
//       res.status(201).json({ message: 'Donation record created successfully' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Server error' });
//     }
//   };
  
  // View all donations
  const getAllDonations = async (req, res) => {
    try {
      const query = 'SELECT * FROM donations';
      const result = await pool.query(query);
      const donations = result.rows;
      res.status(200).json(donations);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  };
  
//   // Create a new student fee record
//   const createStudentFee = async (req, res) => {
//     try {
//       const { studentId, amount, dueDate } = req.body;
//       const query = 'INSERT INTO student_fees (studentId, amount, dueDate) VALUES ($1, $2, $3)';
//       await pool.query(query, [studentId, amount, dueDate]);
//       res.status(201).json({ message: 'Student fee record created successfully' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Server error' });
//     }
//   };
  
  // View all student fees
  const getAllStudentFees = async (req, res) => {
    try {
      const query = 'SELECT * FROM student_fees';
      const result = await pool.query(query);
      const studentFees = result.rows;
      res.status(200).json(studentFees);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  };
  // Approve or reject an expense update request
const approveExpenseUpdate = async (req, res) => {
    try {
      const requestId = req.params.id;
      const { approved } = req.body;
  
      if (approved) {
        // Fetch the request and apply the update to the expense record
        const getRequestQuery = 'SELECT * FROM expense_update_requests WHERE id = $1';
        const getRequestResult = await pool.query(getRequestQuery, [requestId]);
        const request = getRequestResult.rows[0];
  
        if (request) {
          // Update the expense record with the data from the request
          const { expenseId, updatedData } = request;
          const updateExpenseQuery = 'UPDATE expenses SET data = data || $1::jsonb WHERE id = $2';
          await pool.query(updateExpenseQuery, [updatedData, expenseId]);
  
          // Delete the request
          const deleteRequestQuery = 'DELETE FROM expense_update_requests WHERE id = $1';
          await pool.query(deleteRequestQuery, [requestId]);
  
          res.status(200).json({ message: 'Expense update request approved and applied' });
        } else {
          res.status(404).json({ error: 'Request not found' });
        }
      } else {
        // Delete the request if it's rejected
        const deleteRequestQuery = 'DELETE FROM expense_update_requests WHERE id = $1';
        await pool.query(deleteRequestQuery, [requestId]);
        res.status(200).json({ message: 'Expense update request rejected' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  };
  
  module.exports = {
    createAdmin,
    adminLogin,
    createSubadmin,
    getAllSubadmins,
    updateSubadmin,
    deleteSubadminById,
    createExpense,
    getAllExpenses,
    createDonation,
    getAllDonations,
    createStudentFee,
    getAllStudentFees,
    // Add other admin-related functions here...
  };
  
  // Add other admin-related functions here...
;

// // Import necessary modules and models
// const Subadmin = require('../models/Subadmin');
// const Expense = require('../models/Expense');
// const Donation = require('../models/Donation');
// const Student = require('../models/Student');
// const ChatMessage = require('../models/ChatMessage');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// // Get all subadmins
// exports.getAllSubadmins = async (req, res) => {
//   try {
//     const subadmins = await Subadmin.find();
//     res.status(200).json(subadmins);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// // Create a new subadmin
// exports.createSubadmin = async (req, res) => {
//   try {
//     const { username, password, fullName } = req.body;
//     const newSubadmin = new Subadmin({ username, password, fullName });
//     await newSubadmin.save();
//     res.status(201).json({ message: 'Subadmin created successfully' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// // Delete a subadmin by ID
// exports.deleteSubadminById = async (req, res) => {
//   try {
//     const subadminId = req.params.id;
//     const deletedSubadmin = await Subadmin.findByIdAndRemove(subadminId);
//     if (!deletedSubadmin) {
//       res.status(404).json({ error: 'Subadmin not found' });
//     } else {
//       res.status(200).json({ message: 'Subadmin deleted successfully' });
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// // Update subadmin's information
// exports.updateSubadmin = async (req, res) => {
//   try {
//     const subadminId = req.params.id;
//     const { username, password, fullName } = req.body;
//     const updatedSubadmin = await Subadmin.findByIdAndUpdate(
//       subadminId,
//       { username, password, fullName },
//       { new: true }
//     );
//     if (!updatedSubadmin) {
//       res.status(404).json({ error: 'Subadmin not found' });
//     } else {
//       res.status(200).json(updatedSubadmin);
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// // Get all expenses
// exports.getAllExpenses = async (req, res) => {
//   try {
//     const expenses = await Expense.find();
//     res.status(200).json(expenses);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// // Create a new expense
// exports.createExpense = async (req, res) => {
//   try {
//     const { type, amount, date, description, receiptImage } = req.body;
//     const newExpense = new Expense({ type, amount, date, description, receiptImage });
//     await newExpense.save();
//     res.status(201).json({ message: 'Expense created successfully' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// // Get an expense by ID
// exports.getExpenseById = async (req, res) => {
//   try {
//     const expenseId = req.params.id;
//     const expense = await Expense.findById(expenseId);
//     if (!expense) {
//       res.status(404).json({ error: 'Expense not found' });
//     } else {
//       res.status(200).json(expense);
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// // Update an expense by ID
// exports.updateExpense = async (req, res) => {
//   try {
//     const expenseId = req.params.id;
//     const { type, amount, date, description, receiptImage } = req.body;
//     const updatedExpense = await Expense.findByIdAndUpdate(
//       expenseId,
//       { type, amount, date, description, receiptImage },
//       { new: true }
//     );
//     if (!updatedExpense) {
//       res.status(404).json({ error: 'Expense not found' });
//     } else {
//       res.status(200).json(updatedExpense);
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// // Implement other admin-related functions here...

// // Get all donations
// exports.getAllDonations = async (req, res) => {
//     try {
//       const donations = await Donation.find();
//       res.status(200).json(donations);
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ error: 'Server error' });
//     }
//   };
  
//   // Create a new donation
//   exports.createDonation = async (req, res) => {
//     try {
//       const { donorName, amount, date, receiptImage } = req.body;
//       const newDonation = new Donation({ donorName, amount, date, receiptImage });
//       await newDonation.save();
//       res.status(201).json({ message: 'Donation created successfully' });
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ error: 'Server error' });
//     } 
//   };
  
//   // Get a donation by ID
//   exports.getDonationById = async (req, res) => {
//     try {
//       const donationId = req.params.id;
//       const donation = await Donation.findById(donationId);
//       if (!donation) {
//         res.status(404).json({ error: 'Donation not found' });
//       } else {
//         res.status(200).json(donation);
//       }
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ error: 'Server error' });
//     }
//   };
  
//   // Update a donation by ID
//   exports.updateDonation = async (req, res) => {
//     try {
//       const donationId = req.params.id;
//       const { donorName, amount, date, receiptImage } = req.body;
//       const updatedDonation = await Donation.findByIdAndUpdate(
//         donationId,
//         { donorName, amount, date, receiptImage },
//         { new: true }
//       );
//       if (!updatedDonation) {
//         res.status(404).json({ error: 'Donation not found' });
//       } else {
//         res.status(200).json(updatedDonation);
//       }
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ error: 'Server error' });
//     }
//   };
  
//   // Implement other admin-related functions here...
  
//   // Get student's fees information
//   exports.getStudentFeesInfo = async (req, res) => {
//     try {
//       const studentId = req.params.studentId;
//       const student = await Student.findById(studentId);
      
//       // Implement logic to retrieve and format student fees information
//       const feesInfo = {
//         studentName: student.name,
//         // Add other relevant fees information here...
//       };
      
//       res.status(200).json(feesInfo);
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ error: 'Server error' });
//     }
//   };
  
//   // Implement other admin-related functions here...
  
//   // Send a chat message
//   exports.sendMessage = async (req, res) => {
//     try {
//       const { userId, messageText } = req.body;
//       const newMessage = new ChatMessage({ userId, messageText });
//       await newMessage.save();
//       res.status(201).json({ message: 'Message sent successfully' });
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ error: 'Server error' });
//     }
//   };
  
//   // Implement other admin-related functions here...
  
//   // Add translation functionality
//   exports.translateSite = async (req, res) => {
//     try {
//       // Implement translation logic here...
//       res.status(200).json({ message: 'Translation successful' });
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ error: 'Server error' });
//     }
//   };
  
//   // Implement other admin-related functions here...