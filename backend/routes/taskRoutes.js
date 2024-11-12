// backend/routes/taskRoutes.js
const express = require('express');
const db = require('../config/db'); // Import the database connection
const router = express.Router();

// Example route to get all tasks
router.get('/tasks', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM tasks');
    res.status(200).json(rows);
  } catch (err) {
    console.error('Error fetching tasks:', err);
    res.status(500).json({ message: 'Server error, please try again later.' });
  }
});

// Export the router
module.exports = router;
