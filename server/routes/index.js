var express = require('express');
var router = express.Router();
var constQuestion = require('../controllers/question');


router.get('/questions', constQuestion.getAll)
router.post('/questions', constQuestion.createQuestion)
router.delete('/questions/:id', constQuestion.deleteQuestion)
router.get('/time', constQuestion.timedOut)


module.exports = router;
