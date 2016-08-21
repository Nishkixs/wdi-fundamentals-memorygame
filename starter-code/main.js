/*
JavaScript Event Listeners with console logging
*/

// King Imgur URL = http://imgur.com/a/ho31z
// Queem Imgur URL = http://imgur.com/a/Q5wm1

var kingPicture = '<img src="king.jpg" width="150" height="200">';
var queenPicture = '<img src="queen.jpg" width="150" height="200">';
var cardsFlipped = [];

var card1Listener = document.getElementById("card1");
card1Listener.addEventListener("click", clickCard);

function clickCard() {
console.log("The first card, a KING, was selected.");
document.getElementById('card1').innerHTML = kingPicture;
setTimeout(function(){ document.getElementById('card1').innerHTML = ''}, 3000);
console.log(cardsFlipped);
cardsFlipped.push(parseInt('1'));
console.log("Number of cards flipped: " + cardsFlipped.length);

}

var card2Listener = document.getElementById("card2");
card2Listener.addEventListener("click", clickCard2);

function clickCard2() {
console.log("The second card, a QUEEN was selected");
document.getElementById('card2').innerHTML = queenPicture;
setTimeout(function(){ document.getElementById('card2').innerHTML = ''}, 3000);
cardsFlipped.push(parseInt('2'));
console.log(cardsFlipped);
console.log("Number of cards flipped: " + cardsFlipped);

}

var card3Listener = document.getElementById("card3");
card3Listener.addEventListener("click", clickCard3);

function clickCard3() {
console.log("The third card, a KING, was selected");
document.getElementById('card3').innerHTML = kingPicture;
setTimeout(function(){ document.getElementById('card3').innerHTML = ''}, 3000);
console.log(cardsFlipped);
cardsFlipped.push(parseInt('3'));
}

var card4Listener = document.getElementById("card4");
card4Listener.addEventListener("click", clickCard4);

function clickCard4() {
console.log("The fourth card, a QUEEN, was selected");
document.getElementById('card4').innerHTML = queenPicture;
setTimeout(function(){ document.getElementById('card4').innerHTML = ''}, 3000);
cardsFlipped.push(parseInt('4'));
console.log(cardsFlipped);
}

if (cardsFlipped.length == 1) {
console.log("Number of cards flipped: ")
}
