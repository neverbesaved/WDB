var userClickedPattern=[];
var gamePattern=[];
var buttonColors=["red","blue","green","yellow"];
var started=false;
var level=0;

function nextSequence() {
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColor=buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    makeSound(randomChosenColor);
    $("."+randomChosenColor).fadeOut(100).fadeIn(100);
    userClickedPattern=[];
}

function startOver(){
gamePattern=[];
started=false;
level=0;
}

function makeSound(myColor){
    switch (myColor) {
        case "red":
            var red=new Audio('sounds/red.mp3');
        red.play();
            break;
        case "blue":
            var blue=new Audio('sounds/blue.mp3');
        blue.play();
            break;
        case "green":
            var green=new Audio('sounds/green.mp3');
        green.play();
            break;
        case "yellow":
            var yellow=new Audio('sounds/yellow.mp3');
        yellow.play();
            break;
        case "wrong":
            var wrong=new Audio('sounds/wrong.mp3');
        wrong.play();
            break;
        default:
            console.log(myColor)
            break;
    }
}

function animatePress(currentColor){

    $("#"+currentColor).addClass("pressed").delay(100).queue(function(next){
    $(this).removeClass("pressed");
    next();
});}

function animateWrong(){
        $(document.body).addClass("game-over").delay(200).queue(function(next){
        $(this).removeClass("game-over");
        next();
});}

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
        if(userClickedPattern.length===gamePattern.length){
            setTimeout(() => {  nextSequence(); }, 1000);
        }
    } else {
        $("#level-title").text("Game Over, Press Any Key to Restart!");
        var answer="wrong";
        makeSound(answer);
        animateWrong();
        startOver();
    }
}
    $(document).keypress(function() {
    if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
    }
});

$(".btn").click(function(){
    var userChosenColor=this.id;
    userClickedPattern.push(userChosenColor);
    makeSound(userChosenColor);
    animatePress(userChosenColor)
    checkAnswer(userClickedPattern.length-1);
})
