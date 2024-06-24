const express = require('express');
const router = express.Router();
const {quizController, quizHandler} = require('../controllers/QuizController');
router.post('/quizpageadd',quizController);
router.get('/quizpage',quizHandler);
module.exports = router;