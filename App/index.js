const express = require('express')
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
var cors = require('cors')
const app = express()

const api = require('./Routes/api')

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use(cors(), function(req,res,next){
  res.header('Access-Control-Allow-Origin','*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type')
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  next()
})

app.use('/api', api)

app.get('/',async  (req, res) => {
    res.send("server is running");
}) 

app.listen(process.env.PORT, () => {
    console.log(
      `Example app listening on port ${process.env.PORT}!\n http://localhost:${process.env.PORT}`
    );
  });