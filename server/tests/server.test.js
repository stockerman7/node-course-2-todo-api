const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

const todos = [{
  _id: new ObjectID(),
  text: 'First test todo'
}, {
  _id: new ObjectID(),
  text: 'Second test todo'
}];

// 모든 데이터 삭제
beforeEach((done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
});

describe('POST /todos', () => {
  it('새 할일이 생성되었습니다.', (done) => {
    var text = 'Test todo text';

    request(app)  // 서버 요청
      .post('/todos') // /todos 콜렉션
      .send({text})
      .expect(200)  // 요청 상태
      .expect((res) => {
        expect(res.body.text).toBe(text); // 응답확인
      })
      .end((err, res) => {
        if (err) {
          return done(err); // 비동기 테스트 에러 반환
        }
        // 확인 조회
        Todo.find({text}).then((todos) => {
          expect(todos.length).toBe(1); // 찾은 text가 1개인지 확인
          expect(todos[0].text).toBe(text);
          done();
        }).catch((e) => done(e)); // 그럼에도 에러가 발생하면 반환
      });
  });

  it('유효하지 않은 데이터는 생성하지 않습니다.', (done) => {
    request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        Todo.find().then((todos) => {
          expect(todos.length).toBe(2);
          done();
        }).catch((e) => done(e));
      });
  });
});

describe('GET /todos', () => {
  it('할일을 모두 조회합니다.', (done) => {
    request(app)
      .get('/todos')
      .expect(200)
      .expect((res) => {
        expect(res.body.todos.length).toBe(2);
      })
      .end(done);
  });
});

describe('GET /todos/:id', () => {
  it('todo doc를 반환해야 합니다.', (done) => {
    request(app)
      .get(`/todos/${todos[0]._id.toHexString()}`)
      .expect(200)
      .expect((res) => {
        expect(res.body.todo.text).toBe(todos[0].text);
      })
      .end(done);
  });

  it('todo를 찾지못하고 404 에러를 반환해야 합니다.', (done) => {
    var hexId = new ObjectID().toHexString();

    request(app)
      .get(`/todos/${hexId}`)
      .expect(404)
      .end(done);
  });

  it('객체가 아닌 아이디는 404 에러를 반환해야 합니다.', (done) => {
    // todos/
    request(app)
      .get('/todos/123abc')
      .expect(404)
      .end(done);
  });
});
