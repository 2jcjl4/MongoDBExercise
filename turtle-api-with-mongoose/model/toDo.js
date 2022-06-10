const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const toDoSchema = new Schema({
    title: String,
    shortDesc: String,
    catagory: Boolean,
    isDone: Boolean
});

const toDo = mongoose.model('ToDo', toDoSchema);

module.exports = toDo;

// {
//     size: "LARGE",
//     colour: "RED",
//     snappy: false,
//     species: "leatherback",
//     doesKungFu: true,
//     born: new Date('1989-05-22')
// }