const asyncHandler = require('express-async-handler');
const DataLine = require('../models/dataLineModel')
const LineRequest = require('../models/lineRequestModel')


const approveAndIssue = asyncHandler( async (req, res) => {
    const { id } = req.params;
    const { dataLineNumber, dataLineSerialNumber, issuingOfficerName, userName  } = req.body;
  
    const requestToApprove = await LineRequest.findById(id)

    try {

        if (requestToApprove){
            
            // create new data line
            const newDataLine = await DataLine.create(req.body);

            //update request status
            await LineRequest.findByIdAndUpdate(id, {
                status: 'issued'
            }, {
                new:true
            })

            res.status(201).json({
                message: 'success',
                data: newDataLine
            })
        }
     } catch (error) {

        res.status(500).json({
            message: error.message
        })
         
     }
    
})


module.exports = {
    approveAndIssue
}