const { pool, query } = require('./db'); // Import the database connection and query functions

// Create a new donation record
const createDonation = async (donorName, amount, donationDate) => {
  try {
    const insertQuery = `
      INSERT INTO donations (donor_name, amount, donation_date)
      VALUES ($1, $2, $3)
      RETURNING id;
    `;

    const values = [donorName, amount, donationDate];
    const result = await query(insertQuery, values);

    return result.rows[0].id;
  } catch (error) {
    throw error;
  }
};

// Retrieve a list of donations
const getDonations = async () => {
  try {
    const selectQuery = 'SELECT * FROM donations ORDER BY donation_date DESC;';
    const result = await query(selectQuery);

    return result.rows;
  } catch (error) {
    throw error;
  }
};
// ... (previous code)

// Update a donation record by ID
const updateDonation = async (donationId, donorName, amount, donationDate) => {
    try {
      const updateQuery = `
        UPDATE donations
        SET donor_name = $2, amount = $3, donation_date = $4
        WHERE id = $1;
      `;
  
      const values = [donationId, donorName, amount, donationDate];
      await query(updateQuery, values);
    } catch (error) {
      throw error;
    }
  };
  
  // Delete a donation record by ID
  const deleteDonation = async (donationId) => {
    try {
      const deleteQuery = 'DELETE FROM donations WHERE id = $1;';
      await query(deleteQuery, [donationId]);
    } catch (error) {
      throw error;
    }
  };
  // ... (previous code)

// Get a single donation record by ID
const getDonationById = async (donationId) => {
    try {
      const selectQuery = 'SELECT * FROM donations WHERE id = $1;';
      const result = await query(selectQuery, [donationId]);
  
      if (result.rows.length === 0) {
        throw new Error('Donation not found');
      }
  
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  };
  
  // Calculate the total donated amount
  const calculateTotalDonations = async () => {
    try {
      const selectQuery = 'SELECT SUM(amount) AS total_amount FROM donations;';
      const result = await query(selectQuery);
  
      return result.rows[0].total_amount || 0;
    } catch (error) {
      throw error;
    }
  };
  
  // Search for donations by donor name
  const searchDonationsByDonor = async (donorName) => {
    try {
      const selectQuery = 'SELECT * FROM donations WHERE donor_name ILIKE $1;';
      const result = await query(selectQuery, [`%${donorName}%`]);
  
      return result.rows;
    } catch (error) {
      throw error;
    }
  };
  // ... (previous code)

// View donations by date range
const viewDonationsByDateRange = async (startDate, endDate) => {
    try {
      const selectQuery = `
        SELECT *
        FROM donations
        WHERE donation_date BETWEEN $1 AND $2
        ORDER BY donation_date DESC;
      `;
      const result = await query(selectQuery, [startDate, endDate]);
  
      return result.rows;
    } catch (error) {
      throw error;
    }
  };
  
  // Generate a donation receipt
  const generateDonationReceipt = async (donationId) => {
    try {
      const selectQuery = 'SELECT * FROM donations WHERE id = $1;';
      const result = await query(selectQuery, [donationId]);
  
      if (result.rows.length === 0) {
        throw new Error('Donation not found');
      }
  
      const donation = result.rows[0];
  
      // Here, you can format and generate the donation receipt as needed
  
      return donation;
    } catch (error) {
      throw error;
    }
  };
  
  module.exports = {
    createDonation,
    getDonations,
    updateDonation,
    deleteDonation,
    getDonationById,
    calculateTotalDonations,
    searchDonationsByDonor,
    viewDonationsByDateRange,
    generateDonationReceipt,
  };
  
  
//   module.exports = {
//     createDonation,
//     getDonations,
//     updateDonation,
//     deleteDonation,
//     getDonationById,
//     calculateTotalDonations,
//     searchDonationsByDonor,
//   };
  
  
//   module.exports = { createDonation, getDonations, updateDonation, deleteDonation };
  

// module.exports = { createDonation, getDonations };



// // Import necessary modules and models
// const Donation = require('../models/Donation');

// // Get all donations
// exports.getAllDonations = async (req, res) => {
//   try {
//     const donations = await Donation.find();
//     res.status(200).json(donations);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// // Create a new donation
// exports.createDonation = async (req, res) => {
//   try {
//     const { donorName, amount, date, receiptImage } = req.body;
//     const newDonation = new Donation({ donorName, amount, date, receiptImage });
//     await newDonation.save();
//     res.status(201).json({ message: 'Donation created successfully' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// // Get a donation by ID
// exports.getDonationById = async (req, res) => {
//   try {
//     const donationId = req.params.id;
//     const donation = await Donation.findById(donationId);
//     if (!donation) {
//       res.status(404).json({ error: 'Donation not found' });
//     } else {
//       res.status(200).json(donation);
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// // Update a donation by ID
// exports.updateDonation = async (req, res) => {
//   try {
//     const donationId = req.params.id;
//     const { donorName, amount, date, receiptImage } = req.body;
//     const updatedDonation = await Donation.findByIdAndUpdate(
//       donationId,
//       { donorName, amount, date, receiptImage },
//       { new: true }
//     );
//     if (!updatedDonation) {
//       res.status(404).json({ error: 'Donation not found' });
//     } else {
//       res.status(200).json(updatedDonation);
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// // Delete a donation by ID
// exports.deleteDonationById = async (req, res) => {
//   try {
//     const donationId = req.params.id;
//     const deletedDonation = await Donation.findByIdAndRemove(donationId);
//     if (!deletedDonation) {
//       res.status(404).json({ error: 'Donation not found' });
//     } else {
//       res.status(200).json({ message: 'Donation deleted successfully' });
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// // View donations by date range
// exports.viewDonationsByDateRange = async (req, res) => {
//   try {
//     const { startDate, endDate } = req.body;
//     const donations = await Donation.find({ date: { $gte: startDate, $lte: endDate } });
//     res.status(200).json(donations);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// // Generate a donation receipt
// exports.generateDonationReceipt = async (req, res) => {
//   try {
//     const donationId = req.params.id;
//     const donation = await Donation.findById(donationId);
//     if (!donation) {
//       res.status(404).json({ error: 'Donation not found' });
//     } else {
//       // Implement logic to generate a donation receipt (e.g., as a PDF) and send it to the donor
//       // Return the generated receipt or a download link
//       res.status(200).json({ message: 'Donation receipt generated successfully' });
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// // Implement more donation-related functions as needed
// // Implement function to calculate total donations
// exports.calculateTotalDonations = async (req, res) => {
//     try {
//       const donations = await Donation.find();
//       const totalDonations = donations.reduce((sum, donation) => sum + donation.amount, 0);
//       res.status(200).json({ total: totalDonations });
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ error: 'Server error' });
//     }
//   };
  
//   // Implement function to get donations by donor name
//   exports.getDonationsByDonorName = async (req, res) => {
//     try {
//       const donorName = req.params.name;
//       const donations = await Donation.find({ donorName });
//       res.status(200).json(donations);
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ error: 'Server error' });
//     }
//   };
  
//   // Implement more donation-related functions...
  
//   // Implement more donation-related functions...
  
//   // Implement more donation-related functions...
  
//   // Implement more donation-related functions...
  
//   // Implement more donation-related functions...
  
//   // Implement more donation-related functions...
  
//   // Implement more donation-related functions...
  
  
  
  