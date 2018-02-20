// const MongoClient = require('mongodb').MongoClient; // db 클라이언트 생성
const {MongoClient, ObjectID} = require('mongodb');

// 현재 서버역할은 내 컴퓨터, 즉 mongodb://localhost:27017에서 담당하고 있다.
// 결국 client, server 둘 다 내 컴퓨터에서 동작한다.
MongoClient.connect(`mongodb://localhost:27017/TodoApp`, (err, db) => {
  if (err) {
    console.log(`MongoDB 서버에 접속할 수 없습니다.`);
  } else {
    console.log(`MongoDB 서버에 접속했습니다.`);
  }

  // db.collection('Todos').insertOne({
  //   text: '무엇이든 한다',
  //   complete: false
  // }, (err, result) => {
  //   if (err) {
  //     console.log('Todo가 추가되지 않습니다.', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // Users라는 새로운 doc 추가 (name, age, location)
  // db.collection('Users').insertOne({
  //   name: 'Mins',
  //   age: 38,
  //   location: '서울 관악구 낙성대역8길'
  // }, (err, result) => {
  //   if (err) {
  //     console.log('사용자 정보가 추가되지 않습니다.', err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  db.close(); // 서버 접속 종료
});
