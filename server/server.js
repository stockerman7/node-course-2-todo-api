var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

// GET /todos/182798172
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  // id 유효성 -> isValid 사용
  if (!ObjectID.isValid(id)) {
    // 404 - 잘못된 요청으로 처리
    return res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send(); // 404 - 찾을 수 없는 오류
    }

    res.send({todo});
  }).catch((e) => {
    res.status(400).send(); // 400 - 잘못된 요청
  });
});

app.listen(port, () => {
  console.log(`${port}포트가 시작되었습니다.`);
});

module.exports = {app};
