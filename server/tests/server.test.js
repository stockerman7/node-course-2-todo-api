const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

// 모든 데이터 삭제
beforeEach((done) => {
  Todo.remove({}).then(() => done());
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

        Todo.find().then((todos) => {
          expect(todos.length).toBe(1);
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
          expect(todos.length).toBe(0);
          done();
        }).catch((e) => done(e));
      });
  });
});