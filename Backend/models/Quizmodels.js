const mongoose = require('mongoose');

const quizschema = new mongoose.Schema({
    topic:{
        type:String,
        required:true,
    },
    question:{
        type:String,
        required:true,
    },
    options:{
        type:[String],
        required:true,
    },
    answer:{
        type:String,
        required:true,
    },
    createdNow:{
        type:Date,
        default:Date.now,
    }
})

const quizmodel = mongoose.model('quizmodel',quizschema);
module.exports = quizmodel;