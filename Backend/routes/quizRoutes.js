const express = require('express');
const router = express.Router();
const {quizController, quizHandler} = require('../controllers/QuizController');
router.post('/quizpageadd',quizController);
router.post('/quizpage',quizHandler);
module.exports = router;