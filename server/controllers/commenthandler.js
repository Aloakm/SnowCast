const axios = require('axios');
const Comments = require('../models/comments');

exports.postComment = function(req, res, next) {
  const {identity, username, comment} = req.body;
  const addComment = new Comments({identity, username, comment});
  addComment.save()
  .then(result => res.status(200).send(result))
  .catch(e => res.status(422).send({error: 'Unable to post comment'}));
}

exports.getComments = function(req, res, next) {
  var {identity} = req.params
  Comments.find({identity}).then(comments=> {
    res.status(200).send(comments);
  }).catch(e => res.status(422).send({error: 'Unable to fetch comments'}));
}