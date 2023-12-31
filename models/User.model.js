const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  login: { type: String, require: true },
  password: { type: String, require: true },
  avatar: { type: String, require: true },
  telephon: { type: Number, require: true }
});

module.exports = mongoose.model('User', userSchema);