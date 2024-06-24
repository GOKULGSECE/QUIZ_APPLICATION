const mongoose = require('mongoose');

const quizschema = new mongoose.Schema({
    question:{
        type:Array,
        default:[]
    },
    answers:{
        type:Array,
        default:[],
    },
    createdNow:{
        type:Date,
        default:Date.now,
    }
})

const quizmodel = mongoose.model('quizmodel',quizschema);
module.exports = quizmodel;