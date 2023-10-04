const express = require('express');
const router = express.Router();
const subadminController = require('../controllers/subadminController');

// Route to create a new subadmin account
router.post('/create', subadminController.createSubadmin);

// Route to retrieve all subadmins
router.get('/all', subadminController.getAllSubadmins);

// Route to retrieve a subadmin by ID
router.get('/:id', subadminController.getSubadminById);

// Route to update a subadmin by ID
router.put('/:id', subadminController.updateSubadmin);

// Route to delete a subadmin by ID
router.delete('/:id', subadminController.deleteSubadmin);

// Route to view subadmin details by date range
router.get('/byDateRange', subadminController.getSubadminsByDateRange);

module.exports = router;
