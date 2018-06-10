/*
* Create a list that holds all of your cards
*/

let cards = document.getElementsByClassName("card");
cards = [...cards];

const deck = document.querySelector('.deck');

var openCards = [];

/*
* Display the cards on the page
*   - shuffle the list of cards using the provided "shuffle" method below
*   - loop through each card and create its HTML
*   - add each card's HTML to the page
*/

shuffle(cards);

  deck.innerHTML = "";
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.remove('open','show','match');
    deck.appendChild(cards[i]);
  }


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


/*
* set up the event listener for a card. If a card is clicked:
*  - display the card's symbol (put this functionality in another function that you call from this one)
*  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
*  - if the list already has another card, check to see if the two cards match
*    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
*    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
*    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
*    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
*/

var display = function displaySymbol(){
  this.classList.toggle('open');
  console.log("open added to classes of :" + this);
  this.classList.toggle('show');
}

var addToOpen = function open() {
  openCards.push(this);
  if (openCards.length == 2) {
    checkIfMatch(openCards);
    openCards = [];
  }
}

var checkIfMatch = function checkIfMatch(openCards) {
  console.log("checking if match");
  console.log("first element: " + openCards[0].firstElementChild.classList[1]);
  console.log("second element: " + openCards[1].firstElementChild.classList[1]);
  var firstSymbol = "first element: " + openCards[0].firstElementChild.classList[1];
  var secondSymbol = "first element: " + openCards[1].firstElementChild.classList[1];

  if (firstSymbol == secondSymbol) {
    console.log("it's a match!");
    document.getElementsByClassName('open')[0].classList.toggle('open', 'match');
    document.getElementsByClassName('open')[0].classList.toggle('open', 'match');
  } else {
    document.getElementsByClassName('open')[0].classList.toggle('open', 'show');
    document.getElementsByClassName('open')[0].classList.toggle('open', 'show');
  }
}

var eventListener = function eventListener() {
  display;
  addToOpen;
}

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', display);
}
