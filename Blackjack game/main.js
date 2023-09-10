let player = {
  name: "hamed",
  chips: 23,
};
let cards = [];
let sum = 0;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let hasBlackJack = false;
let isAlive = true;
let playerEl = document.getElementById("player-el");

function getRandomCard() {
  let random = Math.floor(Math.random() * 13) + 1;
  if (random === 1) {
    return 11;
  } else if (random === 11 || random === 12 || random === 13) {
    return 10;
  } else {
    return random;
  }
}

let firstCard = getRandomCard();
let secondCard = getRandomCard();
cards.push(firstCard, secondCard);
sum = firstCard + secondCard;
function startGame() {
  renderGame();
}

function renderGame() {
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  if (sum <= 20) {
    message = "you can draw another card";
  } else if (sum === 21) {
    message = "GG you won!!";
    hasBlackJack = true;
  } else {
    message = "hard luck, you're out of the game";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}

playerEl.textContent += player.name + ": $" + player.chips;
