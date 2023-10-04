const { Pool } = require('pg');

// Create a PostgreSQL connection pool
const pool = new Pool({
  user: 'your_username',
  password: 'your_password',
  host: 'your_host', // Default is 'localhost' if not specified
  port: 5432,        // Default PostgreSQL port
  database: 'your_database_name',
  max: 20,           // Maximum number of clients in the pool
  idleTimeoutMillis: 30000, // How long a client is allowed to remain idle
  connectionTimeoutMillis: 2000, // How long to try to connect before timing out
  ssl: {
    // Enable SSL for secure connections (optional)
    rejectUnauthorized: false, // Set to false if self-signed certificates are used
  },
});

// Test the database connection
pool.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Database connected successfully');
  }
});

// Handle database errors
pool.on('error', (err) => {
  console.error('Database error:', err);
});

module.exports = pool;
