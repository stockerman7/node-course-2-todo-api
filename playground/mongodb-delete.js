// const MongoClient = require('mongodb').MongoClient; // db 클라이언트 생성
const {MongoClient, ObjectID} = require('mongodb');

// 현재 서버역할은 내 컴퓨터, 즉 mongodb://localhost:27017에서 담당하고 있다.
// 결국 client, server 둘 다 내 컴퓨터에서 동작한다.
MongoClient.connect(`mongodb://localhost:27017/TodoApp`, (err, db) => {
  if (err) {
    return console.log(`MongoDB 서버에 접속할 수 없습니다.`);
  }
  console.log(`MongoDB 서버에 접속했습니다.`);

  // 여러개 삭제 deleteMany
  // db.collection('Todos').deleteMany({text: '점심을 먹다'}).then((result) => {
  //   console.log(result);
  // });

  // 한개 삭제 deleteOne
  // db.collection('Todos').deleteOne({text: '점심을 먹다'}).then((result) => {
  //   console.log(result);
  // });

  // 특정 한개를 찾아 삭제 findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'Andrew'});

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5a86c4c172126c0461e64a24')
  }).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });

  // db.close(); // 서버 접속 종료
});
