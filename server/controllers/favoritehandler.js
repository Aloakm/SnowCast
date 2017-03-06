const axios = require('axios');
const Favorites = require('../models/favorites');

exports.addFavorite = function(req, res, next) {
  const {identity, username} = req.body;
  const add = new Favorites({identity, username})
  add.save()
  .then(result => res.status(200).send(result))
  .catch(e => res.status(422).send({error: 'Unable to add favorite'}))
}

exports.getFavorites = function(req, res, next) {
  var {username} = req.params
  Favorites.find({username}).then(favorites=> {
    res.status(200).send(favorites)
  }).catch(e => res.status(422).send({error: 'Unable to fetch comments'}))
}