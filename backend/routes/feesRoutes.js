const express = require('express');
const router = express.Router();
const feesController = require('../controllers/feesController');

// Route to create a new fee entry for a student
router.post('/create', feesController.createFeeEntry);

// Route to retrieve all fee entries for a student
router.get('/student/:studentId', feesController.getFeeEntriesByStudent);

// Route to retrieve all pending fee entries for a student
router.get('/pending/:studentId', feesController.getPendingFeeEntries);

// Route to mark a fee entry as paid for a student
router.put('/markPaid/:id', feesController.markFeeEntryAsPaid);

// Route to delete a fee entry by ID
router.delete('/:id', feesController.deleteFeeEntry);

// Route to get fee entries by date range
router.get('/byDateRange', feesController.getFeeEntriesByDateRange);

module.exports = router;
