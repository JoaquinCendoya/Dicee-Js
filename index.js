//Var section
var randomNumber1 = Math.floor( Math.random() * 6 ) + 1;

var randomNumber2 = Math.floor( Math.random() * 6) + 1;

var randomDiceImage1= "images/dice"+randomNumber1+".png";

var randomDiceImage2= "images/dice"+randomNumber2+".png";

//Change attribute
document.querySelector(".img1").setAttribute("src",randomDiceImage1);

document.querySelector(".img2").setAttribute("src",randomDiceImage2);

//Conditional
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML="Player 1 wins!";
} 

else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML="Player 2 wins!";
}

else {
    document.querySelector("h1").innerHTML="Draw!";
}