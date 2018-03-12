var mongoose = require('mongoose'); // db model을 추상화 해주는 모듈

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/TodoApp`);

module.exports = {mongoose};
