const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Expense = sequelize.define(
  'Expense',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    expenseType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2), // Assuming you want to store the amount as a decimal
      allowNull: false,
    },
    expenseDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    receiptImage: {
      type: DataTypes.STRING, // Assuming you want to store the image file path or URL
      allowNull: true,
    },
  },
  {
    tableName: 'expenses', // Set the table name in the database
    timestamps: false, // Disable timestamps (created_at and updated_at)
  }
);

module.exports = Expense;
