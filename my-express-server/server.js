// jshint esversion:6


const express=require("express");

const app=express();

app.get("/", function(req,res){
    res.send("Hello")
})

app.get("/contact", function(req,res){
    res.send("Contact me :")
})

app.get("/about", function(req,res){
    res.send("Nothing interesting to say")
})

app.listen(3000, function(){
    console.log("server started ");
});