


const mongoose = require('mongoose');
// const toDo = require('./ToDo');
const Schema = mongoose.Schema;

const toDoSchema = new Schema({
    title: {
        type: String,
        minlength: 3, //IT STAYS
        trim: true,
        required: [true, 'Title is required']
    },
    shortDesc: {
        type: String,
        maxlength: 100
    },
    category: {
        type: String
    },
    isDone: {
        type: Boolean,
        default: false
    }

});

const toDo = mongoose.model('ToDo', toDoSchema);

module.exports = toDo;

