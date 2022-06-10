const mongoose = require('mongoose');
const toDo = require('./toDo')
const Schema = mongoose.Schema;

const toDoShema = new Schema({
    title: String,
    shortDesc: String,
    category: String,
    isDone: Boolean
});

const toDo = mongoose.model('ToDo', toDoSchema);

module.exports = toDo;

