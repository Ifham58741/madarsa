const { Pool } = require('pg');

// Define the PostgreSQL database connection configuration
const dbConfig = {
  user: 'your_db_user',
  host: 'your_db_host',
  database: 'your_db_name',
  password: 'your_db_password',
  port: 5432, // Default PostgreSQL port
  max: 20, // Maximum number of clients in the pool
  idleTimeoutMillis: 30000, // How long a client is allowed to remain idle before being closed
};

// Create a PostgreSQL database connection pool with the configuration
const pool = new Pool(dbConfig);

// Query function to execute SQL queries
const query = async (text, params) => {
  const start = Date.now();
  const client = await pool.connect();
  try {
    const result = await client.query(text, params);
    const duration = Date.now() - start;
    console.log('Executed query:', { text, duration, rows: result.rowCount });
    return result;
  } finally {
    client.release();
  }
};

// Test the database connection
pool.on('connect', () => {
  console.log('Connected to the PostgreSQL database');
});

pool.on('error', (err) => {
  console.error('PostgreSQL pool error:', err);
  process.exit(-1);
});

module.exports = { pool, query };
