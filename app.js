// TODO - step by step for todo app with mongoose
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

const development = require('./configs/database');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Enable CORS
app.use(cors());

mongoose.connect(`mongodb://${development.username}:${development.password}@${development.host}:${development.port}/${development.database}?&authSource=${development.authSource}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

const todoRoutes = require('./src/routes/todo.routes');

app.use('/api/v1/todos', todoRoutes);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}/api/v1/todos`);
});