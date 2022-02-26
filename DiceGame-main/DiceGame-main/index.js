var randomNumberOne=Math.floor(Math.random()*6);
var randomNumberTwo=Math.floor(Math.random()*6);
document.querySelectorAll(".dice img")[0].setAttribute("src","images/dice"+randomNumberOne+".png");
document.querySelectorAll(".dice img")[1].setAttribute("src","images/dice"+randomNumberTwo+".png");
if(randomNumberOne>randomNumberTwo){
    document.querySelector("h1").innerHTML="🚩Player 1 win";
    countP1++;
}
else if(randomNumberOne<randomNumberTwo){
    document.querySelector("h1").innerHTML="Player 2 win🚩";
    countP2++;
}
else{
    document.querySelector("h1").innerHTML="🏳Draw!🏳 "
}