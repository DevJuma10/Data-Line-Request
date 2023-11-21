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

       throw new Error(error)
         
     }
    
})





const getAllIssuedLines = asyncHandler( async (req, res) => {
    try {
        const issuedLines = await LineRequest.find()
        res.status(200).json({
        message: 'success',
        data: issuedLines
    })
    } catch (error) {
        throw new Error(error)
    }
})


module.exports = {
    approveAndIssue,
    getAllIssuedLines



}