console.log("Up and running!");
/*var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

console.log("User flipped " + cardOne);
console.log("User flipped " + cardThree);*/

var cards= [ 
{
 rank : "queen",
 suit : "hearts",
 cardImage : "images/queen-of-hearts.png" 
},

{
rank : "queen",
 suit : "diamonds",
 cardImage : "images/queen-of-diamonds.png" 
},

{
	rank : "king",
	suit : "hearts",
 	cardImage : "images/king-of-hearts.png" 

},

{

	rank : "king",
	suit : "diamonds",
 	cardImage : "images/king-of-diamonds.png"
}

];

var cardsInPlay = [];


function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}
function flipCard(cardId){

cardsInPlay.push(cards[cardId].rank);


console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);


var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped "+ cardOne);



var cardTwo = cards[2] ;
cardsInPlay.push(cardTwo);
console.log("User flipped" + cardTwo);


if (cardsInPlay.length === 2) {
	console.log("");
}




if (cardsInPlay[0] ===cardsInPlay[1]) {
	alert("You found a match!");

} else {
alert("Sorry, try again");

}
console.log("User flipped "+ cards[cardId].rank);


checkForMatch();
}

flipCard(0);
flipCard(2);

function createBoard(){
	for (var i = 0; i < cardsInPlay.length; i++) {

		cardsInPlay.push(cards[i]);
    
}
}

var newListItem = document.createElement('img');






