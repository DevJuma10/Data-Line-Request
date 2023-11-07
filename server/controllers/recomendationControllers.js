const asyncHandler = require('express-async-handler');
const Recomendation = require('../models/recomendationModel')
const LineRequest = require('../models/lineRequestModel')


//Add Manager Recomendation
const addRecomendation = asyncHandler( async (req, res) => {
    try {
        const { id } = req.params
        const { author, stage, remarks, request} = req.body

        //change status of the original req
       await LineRequest.findByIdAndUpdate(id, {
        status: 'recomended'
        }, 
        {new:true})

        const newRecomendation = await Recomendation.create(req.body)
        // notify user change of request status
        //notify chief manager for approval

        res.status(201).json({
            message: 'success',
            data: newRecomendation
        })


    } catch(error){
        res.status(500).json({
            message: error.message
        })
    }
})


// Add Chief Manager Approval
const addApproval = asyncHandler( async (req, res) => {
    try {
        const { id } = req.params
        const { author, remarks, request} = req.body

        //change status of the original req
       await LineRequest.findByIdAndUpdate(id, {
        status: 'approved'
        }, 
        {new:true})

        const newRecomendation = await Recomendation.create(req.body)
        // notify user change of request status
        //notify ICT-DCO to start issuing of line

        res.status(201).json({
            message: 'success',
            data: newRecomendation
        })


    } catch(error){
        res.status(500).json({
            message: error.message
        })
    }
})




module.exports = {
    addRecomendation,
    addApproval
}