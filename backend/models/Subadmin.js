const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Subadmin = sequelize.define(
  'Subadmin',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'subadmins', // Set the table name in the database
    timestamps: false, // Disable timestamps (created_at and updated_at)
  }
);

module.exports = Subadmin;
