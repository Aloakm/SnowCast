const axios = require('axios');
const Comments = require('../models/comments');

exports.postComment = function(req, res, next) {

}

exports.getComments = function(req, res, next) {
  Comments.find().then(comments=> {
    res.status(200).send(comments)
  }).catch(e => res.status(422).send({error: 'Unable to fetch comments'}))
}