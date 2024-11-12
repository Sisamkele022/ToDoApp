const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'Mariki@1509',
  database: process.env.DB_NAME || 'WomenToDoApp',
});

// Use promise-based API for async/await
module.exports = pool.promise();
