const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const app = express();

dotenv.config();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
