const db = require('../config/db');

const User = {
  findByEmail: async (email) => {
    const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
    return rows[0];
  },
  
  createUser: async (email, password) => {
    const [result] = await db.execute('INSERT INTO users (email, password) VALUES (?, ?)', [email, password]);
    return result;
  }
};

module.exports = User;
