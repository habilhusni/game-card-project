const db = require('../models/question');
// const jwt = require('jsonwebtoken');

let getAll = function(req, res) {

  db.find(function(err, data) {
    if (!err) {
      res.send(data)
    } else {
      res.send(err)
    }
  })

}

let createQuestion = function(req, res) {
  let newQuestion = new db({
      content   : req.body.content,
      answer    : req.body.answer
  })
  newQuestion.save(function(err, data) {
    if (err) {
       res.send(err)
    } else {
      res.send(data)
    }
  })
}

module.exports = {
  getAll,
  createQuestion
}
