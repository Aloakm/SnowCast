const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favSchema = new Schema({
  identity: {
    type: String
  },
  username: {
    type: String
  }
})

module.exports = mongoose.model('fav', favSchema)