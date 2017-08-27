const {MongoClient, ObjectID} = require('mongodb');

// 1. MongoDB 접속
// 2. MongoDB Database 설정: TodoApp
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('MongoDB 서버에 접속할 수 없습니다.');
  }
  console.log('MongoDB 서버에 접속했습니다.');
  // 3. Collection 설정: Todos
  // 4. Document 추가
  // db.collection('Todos').insertOne({
  //   text: '어떤 작업',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('할 일을 추가할 수 없습니다.');
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // Users에 새로운 document를 추가
  // db.collection('Users').insertOne({
  //   name: 'Mins',
  //   age: 37,
  //   location: '서울 관악구 인헌동'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('user를 추가하지 못했습니다.', err);
  //   }
  //
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  db.close(); // db 작업 완료
});
