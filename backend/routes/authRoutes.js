// backend/routes/authRoutes.js
const express = require('express');
const db = require('../config/db'); // Import the database connection
const router = express.Router();

// Example route for user registration
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const result = await db.execute(
      'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
      [username, email, password]
    );
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (err) {
    console.error('Error registering user:', err);
    res.status(500).json({ message: 'Server error, please try again later.' });
  }
});

// Export the router
module.exports = router;
