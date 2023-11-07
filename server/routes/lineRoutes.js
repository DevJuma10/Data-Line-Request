const express = require('express');
const { requestNewDataLine, surrenderDataLine } = require('../controllers/lineControllers');
const router = express.Router()


// Line Request Routes
router.post('/new-request', requestNewDataLine)
router.post('/surrender', surrenderDataLine)






module.exports = router