const express=require('express');
const https=require("https");
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname));
app.use(express.static("public"));

app.get("/",function(req,res){
   res.sendFile(__dirname +"/index.html")
})
app.post("/", function(req,res){
const query=req.body.city;
const appId ="7eb096a711accbd0c1d5592c8a185926#";
const unit="metric";
const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&units="+unit+"&appid="+appId+""
https.get(url,function(response){   
    console.log(response.statusCode);
    response.on("data",(data) =>{
        const weatherData = JSON.parse(data);
        const temp = weatherData.main.temp;
        const description = weatherData.weather[0].description;
        const icon = weatherData.weather[0].icon;
        const url = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
        res.write("<h1>The temperature in "+query+" is "+ temp +" degrees Celsius </h1>")
        res.write("<p>The weather is currently " + description +"</p>")
        res.write("<img src="+ url +">")
        
        res.send();
    })
})
})



app.listen(3000,function(){
    console.log("server started")
})