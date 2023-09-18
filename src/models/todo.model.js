// NOTE - todo schema mongoose 

const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: false,
    }
    }, {
    timestamps: true,
});

const Todo = mongoose.model('todo', todoSchema);
module.exports = Todo;