//const Movie = require('../models/movie-model')
const Task = require("../models/students");
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
                message: 'Student created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Student not created!',
            })
        })
}

updateTask = async (req, res) => {
  try {
    const bookId = req.params.id;
    const updatedData = req.body;

    // Use Mongoose to find the book by its ID and update it
    const updatedBook = await Task.findByIdAndUpdate(bookId, updatedData, {
      new: true, // Return the updated document
      runValidators: true, // Run validators to validate the updated data
    });

    if (!updatedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }

    res.json(updatedBook);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

deleteTask = async (req, res) => {
    try {
        const task = await Task.findOneAndDelete({ _id: req.params.id });
    
        if (!task) {
          return res.status(404).json({
            success: false,
            error: 'Student not found',
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
            error: 'Student not found',
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