console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";


if (cardFour === cardTwo) {
    alert ("Not a match");
}

if (cardOne === cardTwo) {
    alert ("You found a match!");
}

var gameBoard = document.getElementById("game-board");

var createBoard= function(){
    for (var i=0; i<4; i++){
 var newCard = document.createElement('div');
     newCard.className = "board";
     game-board.appendChild(newCard);
    }
    
createBoard();
    
}

