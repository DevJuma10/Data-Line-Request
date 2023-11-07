const mongoose = require('mongoose');

const surrenderLineSchema = new mongoose.Schema({
    dataLine: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DataLine'
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
        type: String,
        required: true
    },

    userDepartment : {
        type: String,
        required: true
    },

    userReturnReason : {
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
        type: String,
        required: true
    },

    stationManagerDepartment : {
        type: String,
        required: true
    },

    stationManagerReturnReason : {
        type: String,
        required: true
    }
}, {timestamps:true})  