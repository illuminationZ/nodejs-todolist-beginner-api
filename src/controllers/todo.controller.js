// Import necessary modules
const Todo = require('../models/todo.model');

// Create a new todo item
exports.createTodo = async (req, res, next) => {
  try {
    const { title, content } = req.body;

    // Create a new todo item
    const newTodo = new Todo({ title, content });

    // Save the todo item to the database
    await newTodo.save();

    // Send a success response
    res.status(201).json(newTodo);
  } catch (error) {
    next(error);
  }
};

// Get all todo items
exports.getAllTodos = async (req, res, next) => {
  try {
    // Fetch all todo items from the database
    const todos = await Todo.find();

    // Send the list of todo items as a response
    res.status(200).json(todos);
  } catch (error) {
    next(error);
  }
};

// Get a single todo item by ID
exports.getTodoById = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Find the todo item by its ID in the database
    const todo = await Todo.findById(id);

    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }

    // Send the todo item as a response
    res.status(200).json(todo);
  } catch (error) {
    next(error);
  }
};

// Update a todo item by ID
exports.updateTodoById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    // Find the todo item by its ID in the database
    const todo = await Todo.findById(id);

    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }

    // Update the todo item with new data
    todo.title = title;
    todo.content = content;

    // Save the updated todo item to the database
    await todo.save();

    // Send the updated todo item as a response
    res.status(200).json(todo);
  } catch (error) {
    next(error);
  }
};

// Delete a todo item by ID
exports.deleteTodoById = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Find the todo item by its ID in the database and remove it
    const deletedTodo = await Todo.findByIdAndRemove(id);

    if (!deletedTodo) {
      return res.status(404).json({ error: 'Todo not found' });
    }

    // Send the deleted todo item as a response
    res.status(200).json(deletedTodo);
  } catch (error) {
    next(error);
  }
};
