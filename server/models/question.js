var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var questionSchema = new Schema({
  content   : String,
  answer    : [],
  trueAnswer : Number
})

var Question = mongoose.model('Question', questionSchema);

module.exports = Question
 
