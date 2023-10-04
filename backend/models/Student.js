const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Student = sequelize.define(
  'Student',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    rollNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateOfBirth: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gradeLevel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    currentCourses: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: 'students', // Set the table name in the database
    timestamps: false, // Disable timestamps (created_at and updated_at)
  }
);

module.exports = Student;
