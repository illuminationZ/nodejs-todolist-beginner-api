// TODO - step by step for todo app with mongoose
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

// Database Config
const development = require('./configs/database');

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Enable CORS
app.use(cors());

// Connect to MongoDB
mongoose.connect(development.database_url,{
    dbName: development.database_name,
    user: development.username,
    pass: development.password,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
    console.log(`Database name: ${development.database_name}`);
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// Routes
const todoRoutes = require('./src/routes/todo.routes');

// Use Routes
app.use('/api/v1/todos', todoRoutes);

// Error Handling
app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
  });

// Start Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}/api/v1/todos`);
});