const axios = require('axios');
const Favorites = require('../models/favorites');

exports.addFavorite = function(req, res, next) {
  const {identity, username, nameString} = req.body;
  const add = new Favorites({identity, username, nameString})
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

exports.checkFavorites = function(req, res, next) {
  var {username, nameString} = req.params;
  Favorites.find({username, nameString}).then(favorites=> {
    if(!favorites[0]) {
      res.status(200).send({value: false})
    } else {
      res.status(200).send({value: true})
    }
    
  }).catch(e => res.status(422).send({error: 'Unable to fetch comments'}))
}

exports.removeFavorite = function(req, res, next) {
  var {username, nameString} = req.params;
  Favorites.findOne({username, nameString}).then(favorite => {
    return favorite.remove()
  }).then(favorite => res.status(200).send(favorite))
}