// creating the tables for the users

const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({

    question: {
        type: String,
        required: true,
    },
    option: {
        type: Array,
        length: 4,
        required: true
    },
    answer:{
        type: String,
        required: true
    }
},

{timestamps: true})

const Quiz = mongoose.model('Quiz', quizSchema );

module.exports = Quiz;