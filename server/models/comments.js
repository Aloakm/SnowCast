const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentsSchema = new Schema({
  identity: {
    type: String
  },
  username: {
    type: String
  },
  comment: {
    type: String
  },
  created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('comments', commentsSchema);