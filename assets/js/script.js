document.addEventListener('DOMContentLoaded', function() {

// Define Game Variables
var currentScore = 0;
var score = document.getElementsByClassName("currentScore")[0];
var timer = 20;
var countdownInterval;
var catImg = document.createElement('img');
catImg.src = "/assets/images/catm.png";
var gameLevel = "";
var currentRate;


// catImg.style.width = '80%';
// catImg.style.height = '80%';

const startButton = document.getElementById('startButton');
const square = document.getElementsByClassName("square");
const levelEasy = document.getElementById('levelEasy');
const levelHard = document.getElementById('levelHard');
var timerRemaining = document.querySelector('.timeremaining .seconds');
var catMoveInterval;
var rate;

function resetScore() {
  currentScore = 0;
  score.textContent = currentScore;
}


function start() {
  resetScore();
  if (gameLevel !== "") {
    if (gameLevel === 'levelEasy') {
    timer = 30;
    rate = 1000;
    } else if (gameLevel === 'levelHard') {
      timer = 20;
      rate = 500;
    }
    timerRemaining.textContent = timer;
    resetScore();
    countdownInterval = setInterval(countdown, 1000);
    displayCat();
    catMoveInterval = setInterval(displayCat, rate);
    startButton.disabled = true;
  }
  }


function level(level) {
  gameLevel = level;
  if (level === 'levelEasy') {
    timer = 30;
    rate = 1000;
  } else if (level === 'levelHard') {
    timer = 20;
    rate = 500;
  }
  timerRemaining.textContent = timer;
  resetScore();
}

function countdown() {
  if (timer > 0) {
    timer--;
    timerRemaining.textContent = timer;
}

  if (timer === 0) {
    endGame();
  }
}

// function that ends game once timer has finished
function endGame() {
  clearInterval(countdownInterval);
  clearInterval(catMoveInterval);
  catImg.removeEventListener('click', incrementScore);

  alert('Time is up game has now ended your score is as follows: ' + currentScore);

      
  startButton.disabled = false;

  }

function resetGame() {
  clearInterval(countdownInterval);
  clearInterval(catMoveInterval);
  catImg.removeEventListener('click', incrementScore);
  timer = 0;
  timerRemaining.textContent = timer;
  currentScore = 0;
  score.textContent = currentScore;
  startButton.disabled = false;

}


// Display random cat
function displayCat() {
  for (var i = 0; i < square.length; i++) {
      square[i].innerHTML = '';
      }

  if (timer > 0) {

    var randomIndex = Math.floor(Math.random() * square.length);
   
    square[randomIndex].appendChild(catImg);
    square[randomIndex].addEventListener('click', incrementScore);
  }
}

function incrementScore(event) {
  var clickedElement = event.target;
  if (clickedElement.contains(catImg)) {
  currentScore++;
  score.textContent = currentScore;
}
}

startButton.addEventListener('click', start);

levelEasy.addEventListener('click', function() {
  level('levelEasy');
});

levelHard.addEventListener('click', function() {
  level('levelHard');
});


function level(level) {
  gameLevel = level;
  if (level === 'levelEasy') {
    timer = 30;
    rate = 1000;
  } 
  timerRemaining.textContent = timer;
}

});


