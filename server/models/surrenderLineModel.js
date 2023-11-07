const mongoose = require('mongoose');

const surrenderLineSchema = new mongoose.Schema({
    // dataLine: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'DataLine'
    // },
    dataLine: {
        type: Number,
        required: true,
        unique: true
    },

    userFullNames : {
        type: String,
        required: true
    },

    userStaffNumber : {
        type: String,
        required: true
    },

    userDesignation : {
        type: String,
        required: true
    },

    userExtension : {
        type: Number,
        required: true
    },

    userDepartment : {
        type: String,
        required: true
    },

    returnReason : {
        type: String,
        required: true
    },
    stationManagerFullNames : {
        type: String,
        required: true
    },

    stationManagerStaffNumber : {
        type: String,
        required: true
    },

    stationManagerDesignation : {
        type: String,
        required: true
    },

    stationManagerExtension : {
        type: Number,
        required: true
    },

    stationManagerDepartment : {
        type: String,
        required: true
    },

    StationManagerRecomendation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recomendation'
    },
    status: {
        type: String,
        enum: ['pending', 'surrendered'],
        default: 'pending'
    }

}, {timestamps:true})  

module.exports = mongoose.model('SurrenderLine', surrenderLineSchema)