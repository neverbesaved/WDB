// jshint esversion:6


const express=require('express');
const bodyParser = require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended: true}))

app.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html");
})

app.post("/", function(req,res){
   var weight = Number(req.body.weight);
   var height = Number(req.body.height);
   var result=((weight/height)/height)*10000
    res.send("Your BMI is equal to: "+result)
})

app.listen(3000,function(){
    console.log("server started");
})