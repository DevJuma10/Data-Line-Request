const express = require("express");
const bodyParser = require('body-parser')
const dbConnect = require('./config/dbConnect');
const lineRoutes = require('./routes/lineRoutes')
const recomendationRoutes = require('./routes/recomendationRoutes')
const dataLineRoutes = require('./routes/dataLineRoutes')
// const dotenv = require('dotenv').config();
const app  = express();

const PORT = process.env.PORT || 8080;

dbConnect()


//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


// API HOME
app.get('/api/home', (req, res)=>{
    res.status(200).json({
        message:"Hello World"
    })
})

app.use('/api/line-request', lineRoutes)
app.use('/api/approvals', recomendationRoutes)
app.use('/api/line-issue', dataLineRoutes )


app.listen(PORT, () => {
    console.log(`Server started on  port ${PORT}`);
});