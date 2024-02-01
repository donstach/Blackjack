
let cards = []
let gameOn = false
let gotBlackJack = false
sum = 0

let message = '';

let displayEl = document.querySelector('#display-el');
let sumEl = document.querySelector('#sum-el')
let cardEl = document.querySelector('#card-el')

 

function getRandomCard() {
 let randomNumber = Math.floor(Math.random() * 13) + 1
  if (randomNumber > 10) {
    return 10
  } else if (randomNumber === 1) {
    return 11
  } else {
    return randomNumber
  }
 
  
}


function startGame() {
  gameOn = true
  gotBlackJack = false
let firstCard = getRandomCard();
let secondCard = getRandomCard();
cards = [firstCard, secondCard]
 sum = firstCard + secondCard;
  renderGame()
}

function renderGame() {
  cardEl.textContent = "Cards: "

  for (let i = 0; i < cards.length; i++) {

    cardEl.textContent += cards[i] + " "
  }


  sumEl.textContent = "Sum: " + sum
  
  if (sum <= 20) {
    message = "Do you want to draw a card?"
    gameOn = true
  } else if (sum === 21) {
    message = "Wohoo! You've Blackjack! "
    gotBlackJack = true
  } else {
      message = "You're out of the game!"
      gameOn = false
    }
  
  displayEl.textContent = message;


}

function newCard() {
  if (gameOn === true && gotBlackJack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
  }
  

  renderGame()
}



