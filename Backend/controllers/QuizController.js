const QuizModel = require('../models/Quizmodels');

const quizHandler = async (req, res) => {
    const { topic } = req.body;

    try {
        const quizzes = await QuizModel.find({ topic });
        if (quizzes.length > 0) {
            res.status(200).json({ questions:quizzes });
        } else {
            res.status(404).json({ message: "No quizzes found for the given topic" });
        }
    } catch (error) {
        console.error("Error fetching quizzes by topic:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
const quizController = async (req, res) => {
    const { topic, question, options, answer } = req.body;
    if (!topic || !question || !options || !answer) {
        return res.status(400).json({ message: "All fields are required: topic, question, options, answer" });
    }
    if (!Array.isArray(options) || options.length < 2) {
        return res.status(400).json({ message: "Options must be an array with at least two elements" });
    }
    if (!options.includes(answer)) {
        return res.status(400).json({ message: "Answer must be one of the options" });
    }

    try {
        const newQuiz = new QuizModel({
            topic,
            question,
            options,
            answer
        });
        await newQuiz.save();
        res.status(200).json({ message: "Quiz question has been added successfully" });
    } catch (error) {
        console.error("Error adding new quiz question:", error);
        res.status(500).json({ message: "Internal server error, please try again later" });
    }
};

module.exports = {
    quizHandler,
    quizController
};
