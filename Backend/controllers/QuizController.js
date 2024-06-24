const quizmodel = require('../models/Quizcmodels')

const quizController = async(req,res)=>{
    const {question,answers} = req.body; 
    try{
        const new_data_quiz = new quizmodel({
            question,
            answers
        })
        await new_data_quiz.save();
        res.status(200).json({message:"Question has been updated successfully"})
    }
    catch{
        res.status(404).json({message:"Internal server error try again later"});
    }
}

module.exports = quizController;