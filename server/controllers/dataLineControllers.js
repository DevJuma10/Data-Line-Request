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


const getAllRequests = asyncHandler( async (req, res) => {
    try {
        const allRequests = await LineRequest.find()
        res.status(200).json({
        status:'sucess',
        data: allRequests
    })
    } catch (error) {
        throw new Error(error)
    }
})


const getAllPendingRequests = asyncHandler( async (req, res) => {
    try {
        const pendingRequests = await LineRequest.find({status:"pending"})
        res.status(200).json({
        message: 'success',
        data: pendingRequests
    })
    } catch (error) {
        throw new Error(error)
    }
})


const getAllApprovedRequests = asyncHandler( async (req, res) => {
    try {
        const approvedRequests = await LineRequest.find({status:"approved"})
        res.status(200).json({
        message: 'success',
        data: approvedRequests
    })
    } catch (error) {
        throw new Error(error)
    }
})


const getAllRejectedRequests = asyncHandler( async (req, res) => {
    try {
        const rejectedRequests = await LineRequest.find({status:"rejected"})
        res.status(200).json({
        message: 'success',
        data: rejectedRequests
    })
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
    getAllIssuedLines,
    getAllRequests,
    getAllPendingRequests,
    getAllApprovedRequests,


}