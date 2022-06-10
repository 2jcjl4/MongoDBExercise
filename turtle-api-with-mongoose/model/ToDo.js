const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const toDoShema = new Schema({
    title: String,
    shortDesc: String,
    category: Boolean,
    isDone: Boolean
});

const toDo = mongoose.model('ToDo', toDoSchema);

module.exports = toDo;
