const mongoose = require('mongoose');
const toDo = require('./toDo');
const Schema = mongoose.Schema;

const toDoSchema = new Schema({
    title: String,
    shortDesc: String,
    catagory: Boolean,
    isDone: Boolean
});

const Turtle = mongoose.model('toDo', toDoSchema);

module.exports = toDo;
