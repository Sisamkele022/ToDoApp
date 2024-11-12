const db = require('../config/db');

const Task = {
  getTasksByUserId: async (userId) => {
    const [rows] = await db.execute('SELECT * FROM tasks WHERE user_id = ?', [userId]);
    return rows;
  },
  
  createTask: async (userId, taskName, description) => {
    const [result] = await db.execute('INSERT INTO tasks (user_id, task_name, description) VALUES (?, ?, ?)', [userId, taskName, description]);
    return result;
  },
  
  updateTaskStatus: async (taskId, isCompleted) => {
    const [result] = await db.execute('UPDATE tasks SET is_completed = ? WHERE id = ?', [isCompleted, taskId]);
    return result;
  },
  
  deleteTask: async (taskId) => {
    const [result] = await db.execute('DELETE FROM tasks WHERE id = ?', [taskId]);
    return result;
  }
};

module.exports = Task;
