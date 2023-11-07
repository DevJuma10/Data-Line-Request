const mongoose = require('mongoose');

const dataLineSchema = new mongoose.Schema({

    dataLineNumber:{
        type: Number,
        unique: true,
        required: true
    },

    dataLineSerialNumber: {
        type: String,
        unique: true,
        required: true
    },

    issuingOfficerName: {
        type: String,
        required: true,
    },

    userName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'

    },




}, {timestamps: true})

module.exports = mongoose.model('DataLine', dataLineSchema)