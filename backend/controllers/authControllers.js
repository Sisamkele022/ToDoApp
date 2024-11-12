const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = await User.createUser(email, hashedPassword);
    const token = jwt.sign({ userId: newUser.insertId }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(201).json({ message: 'User created successfully', token });
  } catch (err) {
    res.status(500).json({ message: 'Error creating user', error: err.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const user = await User.findByEmail(email);
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful', token });
  } catch (err) {
    res.status(500).json({ message: 'Error logging in', error: err.message });
  }
};

module.exports = { register, login };
