const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Donation = sequelize.define(
  'Donation',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    donorName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2), // Assuming you want to store the amount as a decimal
      allowNull: false,
    },
    donationDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    receiptNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: 'donations', // Set the table name in the database
    timestamps: false, // Disable timestamps (created_at and updated_at)
  }
);

module.exports = Donation;
