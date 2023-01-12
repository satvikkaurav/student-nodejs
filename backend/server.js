const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors');

const studentrouter = require("./routes/students");

const app = express()
const port  = 8000

//Mongodb connection
const url = "mongodb://127.0.0.1:27017/newdb";
const con = mongoose.connect(url, {useNewUrlParser:true});
try{
    con.on('open',()=>{
        console.log(("connected"));
    })
}catch(error){
    console.log("Error:"+error);
}

//
var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());

// parse application/json
app.use(bodyParser.json())
app.use('/students',studentrouter);
app.use(express.json())
app.get('/', (req, res)=>{
    const filepath = path.join(__dirname,"./../frontend")
    res.sendFile('index.html',{root: filepath})
})
app.get('/success', (req, res)=>{
    const filepath = path.join(__dirname,"./../frontend")
    res.sendFile('success.html',{root: filepath})
})
app.get('/view', (req, res)=>{
    const filepath = path.join(__dirname,"./../frontend")
    res.sendFile('view.html',{root: filepath})
})

app.listen(port, ()=>{
    console.log("App Running")
})