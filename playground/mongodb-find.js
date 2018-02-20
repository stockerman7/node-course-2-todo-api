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

  // db.collection('Todos').find({
  //   // 주의: _id는 string 타입이 아니라 object 타입이다.
  //   _id: new ObjectID('5a86d04325b271e2634932c0')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('할 일을 가져옵니다', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('할 일을 가져옵니다', err);
  // });

  db.collection('Users').find({name: 'Mins'}).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  });

  // db.close(); // 서버 접속 종료
});
