const asyncHandler = require('express-async-handler');
const LineRequest = require('../models/lineRequestModel')

//CREATE A REQUEST -> NEW DATA LINE REQUEST
const requestNewDataLine = asyncHandler( async (req, res) => {
    const { fullName, staffNumber, nationalID, department, sectionUnit, buildingFloor, requestType, reason, email } = req.body;

    //TODO -> check if user has a pending request or an active data line
    
    if(1){
        //create request
        const newLineRequest = await LineRequest.create(req.body)
        res.status(201).json({
            message:'success',
            data:newLineRequest
        })
    
    } else {
        throw new Error ('There\'s a pending request for this user or The user has an active data line')
    }
        





  
})

//CREATE A REQUEST -> SURRENDER DATA LINE

//CREATE A REQUEST -> REPLACING A DATA LINE REQUEST




module.exports = {
    requestNewDataLine,
}