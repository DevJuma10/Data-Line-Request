const mongoose = require('mongoose');

const lineRequestSchema = new mongoose.Schema({
  fullName: {
    type:String,
    required:true,

},
  staffNumber:{
    type:String,
    required:true,
    unique:true
},

  nationalID: {
    type:String,
    required:true,
    unique:true
},
department: {
    type:String,
    required:true
},
sectionUnit:{
    type:String,
    required:true
  },
  buildingFloor:{
    type:String,
    required:true,
  },
  requestType: {
    type:String,
    required:true,
    enum:['new-data-line', 'replacement']
  },
  reason: {
    type:String,
    required:true
  },
  status: {
    type: String,
    enum: ['pending', 'recomended', 'approved', 'rejected', 'issued'],
    default: 'pending'
  },

  recomendation:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recomendation'
  },
  
  dataLineIssued: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'DataLine'
  },

  requestedBy: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' },
    
},  {timestamps:true});

module.exports = mongoose.model('LineRequest', lineRequestSchema);
