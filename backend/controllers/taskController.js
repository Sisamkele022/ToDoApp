const Task = require('../models/taskModel');

const getTasks = async (req, res) => {
  const { userId } = req.user;
  
  try {
    const tasks = await Task.getTasksByUserId(userId);
    res.status(200).json({ tasks });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching tasks', error: err.message });
  }
};

const createTask = async (req, res) => {
  const { userId } = req.user;
  const { taskName, description } = req.body;
  
  try {
    const task = await Task.createTask(userId, taskName, description);
    res.status(201).json({ message: 'Task created', task });
  } catch (err) {
    res.status(500).json({ message: 'Error creating task', error: err.message });
  }
};

const updateTaskStatus = async (req, res) => {
  const { taskId } = req.params;
  const { isCompleted } = req.body;
  
  try {
    await Task.updateTaskStatus(taskId, isCompleted);
    res.status(200).json({ message: 'Task status updated' });
  } catch (err) {
    res.status(500).json({ message: 'Error updating task', error: err.message });
  }
};

const deleteTask = async (req, res) => {
  const { taskId } = req.params;
  
  try {
    await Task.deleteTask(taskId);
    res.status(200).json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting task', error: err.message });
  }
};

module.exports = { getTasks, createTask, updateTaskStatus, deleteTask };
