const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');

// Route to create a new expense record
router.post('/create', expenseController.createExpense);

// Route to retrieve all expenses
router.get('/all', expenseController.getAllExpenses);

// Route to retrieve an expense by ID
router.get('/:id', expenseController.getExpenseById);

// Route to update an expense by ID
router.put('/:id', expenseController.updateExpense);

// Route to delete an expense by ID
router.delete('/:id', expenseController.deleteExpense);

// Route to view expenses by date range
router.get('/byDateRange', expenseController.getExpensesByDateRange);

// Route to request an expense record update
router.post('/requestUpdate/:id', expenseController.requestExpenseUpdate);

// Route to approve an expense update request
router.put('/approveUpdate/:id', expenseController.approveExpenseUpdate);

module.exports = router;
