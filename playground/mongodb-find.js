const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('MongoDB 서버에 접속할 수 없습니다.');
  }
  console.log('MongoDB 서버에 접속했습니다.');

  // db.collection('Todos').find({
  //   _id: new ObjectID('59a002e8ba26a605fa05258c')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('todos를 가져올 수 없습니다.');
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('todos를 가져올 수 없습니다.');
  // });

  db.collection('Users').find({name: 'Mins'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  });

  // db.close(); // db 작업 완료
});
