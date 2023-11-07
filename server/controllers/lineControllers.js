const asyncHandler = require('express-async-handler');
const LineRequest = require('../models/lineRequestModel')
const SurrenderRequest = require('../models/surrenderLineModel')

//CREATE A REQUEST -> NEW DATA LINE REQUEST
const requestNewDataLine = asyncHandler( async (req, res) => {
    const { fullName, staffNumber, nationalID, department, sectionUnit, buildingFloor, requestType, reason, email } = req.body;

    //TODO -> check if user has a pending request or an active data line
    
    if(1){
        //create request
        const newLineRequest = await LineRequest.create(req.body)

        //email notifications
            // notify applicant
            // notify manager for recomendation


        res.status(201).json({
            message:'success',
            data:newLineRequest
        })
    
    } else {
        throw new Error ('There\'s a pending request for this user or The user has an active data line')
    }
        





  
})

//CREATE A REQUEST -> SURRENDER DATA LINE

const surrenderDataLine = asyncHandler( async (req, res) => {
    const { userFullNames, userStaffNumber, userDesignation, userExtension, userDepartment, returnReason, userDataLine } = req.body;
    const { stationManagerFullNames, stationManagerStaffNumber, stationManagerDesignation, stationManagerExtension, stationManagerDepartment } = req.body;

    
    // create request type -> surrender
     // check if line status if active
    if(1){
        const newSurrenderRequest = await SurrenderRequest.create(req.body)
        //notify user
        // notify station manager 4 approval

        res.status(201).json({
            message:'success',
            data:newSurrenderRequest
        })
    
    } else {
        throw new Error ('There\'s a pending request for this user or The user has an active data line')
    }
    
})





//ISSUE LINE TO APPLICANT





module.exports = {
    requestNewDataLine,
    surrenderDataLine
}