const { pool, query } = require('./db'); // Import the database connection and query functions

// Create a new expense record
const createExpense = async (expenseData) => {
  try {
    const insertQuery = `
      INSERT INTO expenses (expense_type, amount, expense_date, receipt_photo)
      VALUES ($1, $2, $3, $4)
      RETURNING id;
    `;

    const values = [expenseData.expenseType, expenseData.amount, expenseData.expenseDate, expenseData.receiptPhoto];
    const result = await query(insertQuery, values);

    return result.rows[0].id;
  } catch (error) {
    throw error;
  }
};

// Retrieve a list of all expenses
const getAllExpenses = async () => {
  try {
    const selectQuery = 'SELECT * FROM expenses ORDER BY expense_date DESC;';
    const result = await query(selectQuery);

    return result.rows;
  } catch (error) {
    throw error;
  }
};

// Retrieve an expense by ID
const getExpenseById = async (expenseId) => {
  try {
    const selectQuery = 'SELECT * FROM expenses WHERE id = $1;';
    const result = await query(selectQuery, [expenseId]);

    if (result.rows.length === 0) {
      throw new Error('Expense not found');
    }

    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

// Update an expense record
const updateExpense = async (expenseId, updatedData) => {
  try {
    const updateQuery = `
      UPDATE expenses
      SET expense_type = $1, amount = $2, expense_date = $3, receipt_photo = $4
      WHERE id = $5;
    `;

    const values = [
      updatedData.expenseType,
      updatedData.amount,
      updatedData.expenseDate,
      updatedData.receiptPhoto,
      expenseId,
    ];

    await query(updateQuery, values);
  } catch (error) {
    throw error;
  }
};

// Delete an expense record
const deleteExpense = async (expenseId) => {
  try {
    const deleteQuery = 'DELETE FROM expenses WHERE id = $1;';
    await query(deleteQuery, [expenseId]);
  } catch (error) {
    throw error;
  }
};
// ...

// Retrieve expenses within a date range (month, year, and date)
const getExpensesByDateRange = async (startYear, startMonth, startDate, endYear, endMonth, endDate) => {
    try {
      const selectQuery = `
        SELECT *
        FROM expenses
        WHERE (EXTRACT(YEAR FROM expense_date) BETWEEN $1 AND $4)
          AND (EXTRACT(MONTH FROM expense_date) BETWEEN $2 AND $5)
          AND (EXTRACT(DAY FROM expense_date) BETWEEN $3 AND $6)
        ORDER BY expense_date DESC;
      `;
  
      const values = [startYear, startMonth, startDate, endYear, endMonth, endDate];
      const result = await query(selectQuery, values);
  
      return result.rows;
    } catch (error) {
      throw error;
    }
  };
  // ...

// Get total expenses within a date range
const getTotalExpensesByDateRange = async (startYear, startMonth, startDate, endYear, endMonth, endDate) => {
    try {
      const selectQuery = `
        SELECT SUM(amount) AS total_amount
        FROM expenses
        WHERE (EXTRACT(YEAR FROM expense_date) BETWEEN $1 AND $4)
          AND (EXTRACT(MONTH FROM expense_date) BETWEEN $2 AND $5)
          AND (EXTRACT(DAY FROM expense_date) BETWEEN $3 AND $6);
      `;
  
      const values = [startYear, startMonth, startDate, endYear, endMonth, endDate];
      const result = await query(selectQuery, values);
  
      return result.rows[0].total_amount || 0;
    } catch (error) {
      throw error;
    }
  };
  
  // Export the new function
  module.exports = {
    createExpense,
    getAllExpenses,
    getExpenseById,
    updateExpense,
    deleteExpense,
    getExpensesByDateRange,
    getTotalExpensesByDateRange, // Add the new function to exports
  };
  
  module.exports = {
    createExpense,
    getAllExpenses,
    getExpenseById,
    updateExpense,
    deleteExpense,
    getExpensesByDateRange, // Add the new function to exports
  };
  
module.exports = {
  createExpense,
  getAllExpenses,
  getExpenseById,
  updateExpense,
  deleteExpense,
};
