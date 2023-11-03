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
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
},
officialEmail: String,
phoneNumber: String,
  managerApproval: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  managerRemarks: String,
  seniorApproval: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  seniorRemarks: String,
  topManagerApproval: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  topManagerRemarks: String,
  itemsProvided: String
},  {timestamps:true});

module.exports = mongoose.model('LineRequest', lineRequestSchema);
