var express = require('express');
var bodyParser = require('body-parser'); // body parser 미들웨어
var {ObjectID} = require('mongodb'); // id 조회를 위해

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express(); // 서버 App 생성
const port = process.env.PORT || 3000;

app.use(bodyParser.json()); // 요청 매개변수를 추출하려면 필요, json 형식

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

// 조회 id -> /todos/192890182018
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  // id 유효 여부
  if (!ObjectID.isValid(id)) {
    return res.status(404).send(); // 없으면 404 에러
  }

  // findById
  Todo.findById(id).then((todo) => {
    // 없으면 404 에러 전달
    if (!todo) {
      return res.status(404).send();
    }
    // 있으면 전달
    res.send({todo});
  }).catch((e) => {
    // 400 에러
    res.status(400).send();
  });
});


app.listen(port, () => {
  console.log(`${port} 포트로 시작되었습니다.`);
});

module.exports = {app};
