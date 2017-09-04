const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('MongoDB 서버에 접속할 수 없습니다.');
  }
  console.log('MongoDB 서버에 접속했습니다.');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("59a5367b09a87e013bda49ad")
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  // 59a12125066467033a4dcde3
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("59a12125066467033a4dcde3")
  }, {
    $set: { // Update Operator
      name: 'Mins' // 이름 변경
    },
    $inc: {
      age: 1 // 1 증가
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  db.close(); // db 작업 완료
});
