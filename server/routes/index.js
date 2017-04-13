var express = require('express');
var router = express.Router();
var constQuestion = require('../controllers/question');


router.get('/questions', constQuestion.getAll)
router.post('/questions', constQuestion.createQuestion)


module.exports = router;
