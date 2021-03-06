/*
* Create a list that holds all of your cards
*/

let cards = document.getElementsByClassName("card");
cards = [...cards];

const deck = document.querySelector('.deck');
const movesCounter = document.querySelector('.moves');
const starsCounter = document.querySelector('.stars');
const star = '<li><i class="fa fa-star"></i></li>';

let openCards = [];
let matchedCardsCounter;
let moves;

/*
* Display the cards on the page
*   - shuffle the list of cards using the provided "shuffle" method below
*   - loop through each card and create its HTML
*   - add each card's HTML to the page
*/

startGame();

function prepareDeck() {
  deck.innerHTML = "";
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.remove('open','show','match','disabled');
    deck.appendChild(cards[i]);
    cards[i].addEventListener('click', function() {
      if (openCards.length === 1) {
        const currentCard = this;
        const previousCard = openCards[0];

        this.classList.add('open' , 'show', 'disabled');
        openCards.push(this);

        if (currentCard.innerHTML === previousCard.innerHTML) {
          console.log("It's a match");
          currentCard.classList.add('match');
          previousCard.classList.add('match');
          openCards = [];
          matchedCardsCounter+=2;
          isOver();
        } else {
          console.log("Not a match :(");
        }
        addMove();
        rating();
      } else {
        if (openCards.length === 2) {
          openCards[0].classList.remove('open', 'show', 'disabled');
          openCards[1].classList.remove('open', 'show', 'disabled');
          openCards = [];
        }
        this.classList.add('open' , 'show');
        openCards.push(this);
      }
    });
  }
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

function isOver() {
  if (matchedCardsCounter === cards.length) {
    alert("GAME OVER!")
  }
}

function startGame() {
  shuffle(cards);
  prepareDeck();
  openCards = [];
  matchedCardsCounter = 0;
  moves = 0;
}

function addMove() {
  moves++;
  movesCounter.innerHTML = moves;
}

function rating() {
  if (15 < moves && moves < 21) {
      starsCounter.innerHTML =star+star;
  } else if (moves > 22) {
    starsCounter.innerHTML =star;
  } else {
    starsCounter.innerHTML =star+star+star;
  }
}

document.querySelector('.restart').addEventListener('click' , function() {
  startGame();
})

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
