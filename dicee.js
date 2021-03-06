var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

randomDice1 = document.querySelector(".img1")
randomDice1.setAttribute("src", "images/dice" + randomNumber1 + ".png");

randomDice2 = document.querySelector(".img2")
randomDice2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

var winner = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
  winner.innerText = "Player 1 Wins! 🚩"
}
else if (randomNumber2 > randomNumber1) {
  winner.innerText = "🚩 Player 2 Wins!"
}
else {
  winner.innerText = "Draw!"
}
