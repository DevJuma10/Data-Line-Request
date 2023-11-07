const mongoose = require('mongoose')

const recomendationSchema = new mongoose.Schema({
    author : {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    },

    stage: {
        type: String,
        enum: ['recomended', 'approved', 'issued'],
        required: true

    },

    remarks: {
        type: String,
        required: true,
    },

    request: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'LineRequest'
    }


}, {timestamps: true})

module.exports = mongoose.model('Recomendation', recomendationSchema)