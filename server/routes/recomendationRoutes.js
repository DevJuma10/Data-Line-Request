const express = require('express');
const { addRecomendation, addApproval } = require('../controllers/recomendationControllers')
const router = express.Router();

router.post('/recomendation/:id', addRecomendation)
router.post('/approval/:id', addApproval)

module.exports = router