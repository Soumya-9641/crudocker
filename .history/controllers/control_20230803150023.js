//const Movie = require('../models/movie-model')
const Task = require("../models/taskmodel");
createTask = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a movie',
        })
    }

    const task = new Task(body)

    if (!task) {
        return res.status(400).json({ success: false, error: err })
    }

    task
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: task._id,
                message: 'Movie created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Movie not created!',
            })
        })
}

updateTask = async (req, res) => {
    const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a body to update',
    });
  }

  try {
    const task = await Task.findOne({ _id: req.params.id });

    if (!task) {
      return res.status(404).json({
        success: false,
        error: 'Movie not found!',
      });
    }

    task.title = body.title;
    task.status = body.status;
    task.description = body.description;
    await task.save();

    return res.status(200).json({
      success: true,
      id: task._id,
      message: 'Movie updated!',
    });
  } catch (error) {
    return res.status(404).json({
      error,
      message: 'Movie not updated!',
    });
  }
}

deleteTask = async (req, res) => {
    try {
        const task = await Task.findOneAndDelete({ _id: req.params.id });
    
        if (!task) {
          return res.status(404).json({
            success: false,
            error: 'Movie not found',
          });
        }
    
        return res.status(200).json({ success: true, data: task });
      } catch (err) {
        return res.status(400).json({ success: false, error: err.message });
      }
}

getTaskById = async (req, res) => {
    try {
        const task = await Task.findOne({ _id: req.params.id });
    
        if (!task) {
          return res.status(404).json({
            success: false,
            error: 'Movie not found',
          });
        }
    
        return res.status(200).json({ success: true, data: task });
      } catch (err) {
        return res.status(400).json({ success: false, error: err.message });
      }
}

getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        if (!tasks.length) {
          return res.status(404).json({ success: false, error: 'Tasks not found' });
        }
        return res.status(200).json({ success: true, data: tasks });
      } catch (err) {
        return res.status(400).json({ success: false, error: err.message });
      }
}

module.exports = {
    createTask,
    updateTask,
    deleteTask,
    getTasks,
    getTaskById,
}