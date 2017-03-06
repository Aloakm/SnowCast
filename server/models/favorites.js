const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favSchema = new Schema({
  identity: {
    type: String,
    unique: true
  },
  username: {
    type: String
  }
})

module.exports = mongoose.model('fav', userSchema)