const express = require("express");
const bodyParser = require('body-parser')
// const dotenv = require('dotenv').config();
const app  = express();


const PORT  = 8080;


//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/api/home', (req, res)=>{
    res.status(200).json({
        message:"Hello World"
    })
})


app.listen(PORT, ()=>{
    console.log(`Server started on  port ${PORT}`);
});