// create deck of cards 
// assign value to each card 
// Ace is worth 1 or 11 
// 52 cards total 4 X 1, 4 X 2 etc. 
let inquirer = require("inquirer");

var wallet = 500
var wallet2 = 500 


// var deck = new Array();
// var suits = ['spades', 'diamonds', 'clubs', 'hearts'];
// var values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

// function getDeck() {
// 	var deck = new Array();

// 	for (var i = 0; i < suits.length; i++) {
	

// 	for (var x = 0; x < values.length; x++) {

// 	var card = {Value: values[x], Suit: suits[i]};
// 	deck.push(card);
// 	}
// }
// console.log(deck);
// }

var deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10];
var userHand = 0;
var wins = 0;
var losses = 0;


// deals a random card intiially 
function dealCard() {
	var rand = deck[Math.ceil(Math.random() * deck.length)];
	deck.splice(deck.indexOf(rand), 1);
	console.log("Your card is " + rand);
	userHand += rand;
	// console.log(deck);
}

function userDecision() {
	dealCard();
	twentyOne();
	Bust();
	if (userHand < 21) {
	inquirer.prompt([
	{
	    type: "confirm",
	    name: "hit",
	    message: "Would you like to hit again?"
	},
	]).then(function(user) {

	if (user.hit === true) {
		// Bust();
		// twentyOne();
		userDecision();
		console.log("your new total is " + userHand);
	} 
	else {
		console.log("you stood with " + userHand);
		};
	});
	}};


// Bust function, if player goes over 21 player busts 
function Bust() {
	if (userHand > 21) {
		console.log("You're out of luck; BUST!")
		losses --;
	}
};

function twentyOne() {
	if (userHand === 21) {
		console.log("Wow, You're a champ; TWENTY ONE!")
		wins++;
	}
};
userDecision();







