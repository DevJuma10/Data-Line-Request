const express = require('express');
const { requestNewDataLine, testing } = require('../controllers/lineControllers');
const router = express.Router()


// Line Request Routes
router.post('/new-request', requestNewDataLine)






module.exports = router