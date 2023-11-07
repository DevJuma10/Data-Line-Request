const express = require('express')
const router = express.Router();
const { approveAndIssue } = require('../controllers/dataLineControllers')


router.post('/approve-and-issue/:id', approveAndIssue)




module.exports = router;