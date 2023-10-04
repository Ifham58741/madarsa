const { pool, query } = require('./db'); // Import the database connection and query functions

// Create a new fees record
const createFees = async (feesData) => {
  try {
    const insertQuery = `
      INSERT INTO fees (program_id, amount, description)
      VALUES ($1, $2, $3)
      RETURNING id;
    `;

    const values = [feesData.programId, feesData.amount, feesData.description];
    const result = await query(insertQuery, values);

    return result.rows[0].id;
  } catch (error) {
    throw error;
  }
};

// Retrieve fees for a specific program
const getFeesByProgramId = async (programId) => {
  try {
    const selectQuery = 'SELECT * FROM fees WHERE program_id = $1;';
    const result = await query(selectQuery, [programId]);

    return result.rows;
  } catch (error) {
    throw error;
  }
};

// Update fees record
const updateFees = async (feesId, updatedData) => {
  try {
    const updateQuery = `
      UPDATE fees
      SET program_id = $1, amount = $2, description = $3
      WHERE id = $4;
    `;

    const values = [updatedData.programId, updatedData.amount, updatedData.description, feesId];
    await query(updateQuery, values);
  } catch (error) {
    throw error;
  }
};

// Delete fees record
const deleteFees = async (feesId) => {
  try {
    const deleteQuery = 'DELETE FROM fees WHERE id = $1;';
    await query(deleteQuery, [feesId]);
  } catch (error) {
    throw error;
  }
};

// Add monthly fees to the student_pendingfee table
const addMonthlyFeesToPending = async (studentId, programId, amount, month, year) => {
  try {
    const insertQuery = `
      INSERT INTO student_pendingfee (student_id, program_id, amount, month, year)
      VALUES ($1, $2, $3, $4, $5);
    `;

    const values = [studentId, programId, amount, month, year];
    await query(insertQuery, values);
  } catch (error) {
    throw error;
  }
};

// Retrieve pending fees for a specific student and program
const getPendingFeesByStudentAndProgram = async (studentId, programId) => {
  try {
    const selectQuery = 'SELECT * FROM student_pendingfee WHERE student_id = $1 AND program_id = $2;';
    const result = await query(selectQuery, [studentId, programId]);

    return result.rows;
  } catch (error) {
    throw error;
  }
};

// Delete pending fees entries after payment
const deletePendingFees = async (studentId, programId, month, year) => {
  try {
    const deleteQuery = 'DELETE FROM student_pendingfee WHERE student_id = $1 AND program_id = $2 AND month = $3 AND year = $4;';
    await query(deleteQuery, [studentId, programId, month, year]);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createFees,
  getFeesByProgramId,
  updateFees,
  deleteFees,
  addMonthlyFeesToPending,
  getPendingFeesByStudentAndProgram,
  deletePendingFees,
};
