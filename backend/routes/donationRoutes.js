const express = require('express');
const router = express.Router();
const donationController = require('../controllers/donationController');

// Route to create a new donation
router.post('/create', donationController.createDonation);

// Route to retrieve all donations
router.get('/all', donationController.getAllDonations);

// Route to retrieve a donation by ID
router.get('/:id', donationController.getDonationById);

// Route to update a donation by ID
router.put('/:id', donationController.updateDonation);

// Route to delete a donation by ID
router.delete('/:id', donationController.deleteDonation);

// Route to view donations by date range
router.get('/byDateRange', donationController.getDonationsByDateRange);

// Route to generate a donation receipt
router.get('/generateReceipt/:id', donationController.generateDonationReceipt);

module.exports = router;
