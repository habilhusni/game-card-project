'use strict';

const db = require('../models/question');
// var backed = require('./background');
// const jwt = require('jsonwebtoken');
var CronJob = require('cron').CronJob;
var timeZone = 'Asia/Jakarta';

let getAll = function(req, res) {

  db.find(function(err, data) {
    if (!err) {
      res.send(data)
    } else {
      res.send(err)
    }
  })

}

let timedOut = function(req, res) {
  // var job = new CronJob('*/5 * * * * *', function() {
  //       res.send('Time is Out!!');
  //   }, function () {
  //      This function is executed when the job stops
  //   },
  //     true, /* Start the job right now */
  //     timeZone /* Time zone of this job. */
  //   );
}

let createQuestion = function(req, res) {
  let checkAnswer;
  if (/[,]/gi.test(req.body.answer)) {
    checkAnswer = req.body.answer.split(',')
  }
  let newQuestion = new db({
      content   : req.body.content,
      answer    : checkAnswer,
      trueAnswer: req.body.trueAnswer
  })
  newQuestion.save(function(err, data) {
    if (err) {
       res.send(err)
    } else {
      res.send(data)
    }
  })
}

let deleteQuestion = function(req, res) {
  db.findByIdAndRemove(req.params.id,
    function(err, data) {
      if (err) {
        res.send(err.message)
      } else {
        res.send("Question success deleted !")
      }
    })
}

module.exports = {
  getAll,
  createQuestion,
  timedOut,
  deleteQuestion
}
