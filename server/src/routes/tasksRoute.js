const { Router } = require("express");
const { getTasks, createTask, updateTask, deleteTask } = require("../controllers/tasksController");

const router = Router();

// Route to list all database tasks
router.get('/', getTasks);

// Route to create a task in database tasks
router.post('/create', createTask);

// Route to update a task in database tasks
router.patch('/update', updateTask);

// Route to delete a task in database tasks
router.delete('/delete', deleteTask);

module.exports = router;