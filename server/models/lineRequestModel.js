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
    enum:['new-data-line', 'replacement', 'surrender']
  },
  reason: {
    type:String,
    required:true
  },
  status: {
    type: String,
    enum: ['pending', 'recomended', 'approved', 'rejected'],
    default: 'pending'
  },

  managerRecomendation: {
    stageName: 'Recomended',
    comments: [{
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to the user who made the comment
      comment: String
    }],
    approved: Boolean,
  },


  // chiefManagerApproval: {
  //   stageName: 'Approved',
  //   comments: [{
  //     user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to the user who made the comment
  //     comment: String
  //   }],
  //   approved: Boolean,
  // },

  // managerRecomendation: {
  //   stageName: 'Recomended',
  //   comments: [{
  //     user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to the user who made the comment
  //     comment: String
  //   }],
  //   approved: Boolean,
  // },

  
  
  itemsProvided: String,
  createdBy: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' },
},  {timestamps:true});

module.exports = mongoose.model('LineRequest', lineRequestSchema);
