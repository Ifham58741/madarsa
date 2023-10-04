const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const sequelize = require('./config/database');
const Admin = require('./models/admin');

// Synchronize models with the database
sequelize.sync();

const Admin = sequelize.define(
  'Admin',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'admin', // Set the table name in the database
    timestamps: false, // Disable timestamps (created_at and updated_at)
  }
);

module.exports = Admin;
