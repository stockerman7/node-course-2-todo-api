var mongoose = require('mongoose');

// User
// eamil - require it - trim it - set type - set min length of 1
var User = mongoose.model('User', {
  email: {
    type: String, // 타입
    required: true, // 필수 사항
    trim: true, // 공백 제거
    minlength: 1  // 최소 갯수
  }
});

module.exports = {User};
