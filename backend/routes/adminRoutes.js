const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Define routes for admin-related functionality
router.post('/create', adminController.createAdmin);
router.get('/all', adminController.getAllAdmins);
router.get('/:id', adminController.getsAdminById);
router.put('/:id', adminController.updatesAdmin);
router.delete('/:id', adminController.deleteAdmin);
// ... (Previous code)

// Additional admin-related routes
router.get('/expenses', adminController.getAllExpenses);
router.get('/donations', adminController.getAllDonations);
router.get('/fees', adminController.getAllFees);
router.get('/students', adminController.getAllStudents);
router.put('/approveExpenseUpdate/:id', adminController.approveExpenseUpdate);
module.exports = router;

module.exports = router;
