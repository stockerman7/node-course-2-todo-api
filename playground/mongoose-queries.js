const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '59b4c5f6ff556a6929c53158';
// // ObjectID 유효하지 않으면
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found!');
//   }
//   console.log('Todo By Id', todo);
// }).catch((err) => console.log(err));

// User.findById
User.findById('59a749e72b4811f20330861e').then((user) => {
  if (!user) {
    return console.log('user가 유효하지 않습니다.');
  }

  console.log(JSON.stringify(user, undefined, 2));
}, (err) => {
  console.log(err);
});
