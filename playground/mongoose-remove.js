const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '59cf822a77a858df04d31615'}).then((todo) => {
//
// });

Todo.findByIdAndRemove('59cf822a77a858df04d31615').then((todo) => {
  console.log(todo);
});
