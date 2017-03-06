const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentsSchema = new Schema({
  identity: {
    type: String,
    unique: true
  },
  username: {
    type: String
  },
  comment: {
    type: String
  }
})

module.exports = mongoose.model('comments', userSchema)