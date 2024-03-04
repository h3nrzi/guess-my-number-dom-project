'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = document.querySelector('.score').textContent;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when there is no input
  if (!guess) displayMessage('No Number!');
  // when player wins
  else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
      console.log(highScore);
    }
  }

  // when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lose The Game!');
      document.querySelector('.score').textContent = 0;
      document.body.style.backgroundColor = '#f00';
      document.querySelector('.number').style.width = '30rem';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
