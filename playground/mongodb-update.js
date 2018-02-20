// const MongoClient = require('mongodb').MongoClient; // db 클라이언트 생성
const {MongoClient, ObjectID} = require('mongodb');

// 현재 서버역할은 내 컴퓨터, 즉 mongodb://localhost:27017에서 담당하고 있다.
// 결국 client, server 둘 다 내 컴퓨터에서 동작한다.
MongoClient.connect(`mongodb://localhost:27017/TodoApp`, (err, db) => {
  if (err) {
    return console.log(`MongoDB 서버에 접속할 수 없습니다.`);
  }
  console.log(`MongoDB 서버에 접속했습니다.`);

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5a8b9f7f7b5f63c0fd1d907a')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  // 5a86c3b50e0087044dac8472
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5a86c3b50e0087044dac8472')
  }, {
    $set: { // set 연산자, 특정 필드 다시 설정
      name: 'Andrew'
    },
    $inc: { // increment 증가 연산자, 특정 필드(column) 지정한 만큼 증가
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // db.close(); // 서버 접속 종료
});
