const asyncHandler = require('express-async-handler');
const Recomendation = require('../models/recomendationModel')
const addRecomendation = asyncHandler( async (req, res) => {
    try {
        const { author, stage, remarks, request} = req.body

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




module.exports = {
    addRecomendation,
}