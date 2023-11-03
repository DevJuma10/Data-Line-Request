const mongoose = require('mongoose')

//Schema of the User model

const userSchema = new mongoose.Schema({

    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
    },
    role: {
        type:String,
        enum:['user', 'manager',  'chief-manager','ict-dco'],
        default:'user'
    },
    password:{
        type:String,
        required:true,
    },
}, {timestamps:true});

//Export the user model
module.exports = mongoose.model('User', userSchema);