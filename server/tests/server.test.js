const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

// 시작전에 Todo Database에 모든 정보를 제거한다.
beforeEach((done) => {
  Todo.remove({}).then(() => done());
})

describe('POST /todos', () => {
  it('새로운 todo가 생성되었습니다.', (done) => {
    var text = 'Test todo text';

    request(app) // 요청
      .post('/todos')
      .send({text})
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find().then((todos) => {
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        }).catch((e) => done(e));
      });
  });

  it('유효하지 않은 body 데이터가 있는 todo 목록을 만들면 안됩니다.', (done) => {
    request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        Todo.find().then((todos) => {
          expect(todos.length).toBe(0);
          done();
        }).catch((e) => done(e));
      });
  });
});
