
var Article = require('../models/article')


var getAll = (req, res) => {
  res.send('getAll')
}

var getOne = (req, res) => {
  res.send('getOne')
}

var create = (req, res) => {
  res.send('create')
}

var remove = (req, res) => {
  res.send('remove')
}

var update = (req, res) => {
  res.send('update')
}

module.exports = {
  getAll, getOne, create, remove, update
}