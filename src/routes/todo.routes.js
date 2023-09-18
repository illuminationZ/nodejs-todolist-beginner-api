const express = require('express');
const router = express.Router();

// Import the todo controller
const todoController = require('../controllers/todo.controller');

// Define routes for todo CRUD operations

// Create a new todo item
router.post('/', todoController.createTodo);

// Get all todo items
router.get('/', todoController.getAllTodos);

// Get a single todo item by ID
router.get('/:id', todoController.getTodoById);

// Update a todo item by ID
router.patch('/:id', todoController.updateTodoById);

// Delete a todo item by ID
router.delete('/:id', todoController.deleteTodoById);

module.exports = router;
