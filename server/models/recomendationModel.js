const mongoose = require('mongoose')

const recomendationSchema = new mongoose.Schema({
    recomendedBy : {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
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