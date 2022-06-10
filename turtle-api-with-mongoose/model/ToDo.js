
const mongoose = require('mongoose');
// const toDo = require('./ToDo');
const Schema = mongoose.Schema;

const toDoSchema = new Schema({
    title: String,
    shortDesc: String,
    category: String,
    isDone: Boolean
});

const toDo = mongoose.model('ToDo', toDoSchema);

module.exports = toDo;

