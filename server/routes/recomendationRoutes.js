const express = require('express');
const { addRecomendation } = require('../controllers/recomendationControllers')
const router = express.Router()

router.post('/recomendation', addRecomendation)


module.exports = router