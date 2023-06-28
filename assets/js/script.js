document.addEventListener('DOMContentLoaded', function() {

// Define Variables
var currentScore = 0;
var timer = 20;
var countdownInterval;
var catImg = document.createElement('img');
catImg.src = "/assets/images/catm.png";
var gameLevel = "";


// catImg.style.width = '80%';
// catImg.style.height = '80%';


// const startButton = document.getElementById('startButton');
// const cat0 = document.getElementsByClassName('catm0');

// const startBtn = document.getElementsByClassName('buttonstart')[0];
const startButton = document.getElementById('startButton');
// const resetButton = document.getElementById('resetButton');
const square = document.getElementsByClassName("square");
const score = document.getElementsByClassName("currentScore")[0];
const levelEasy = document.getElementById('levelEasy');
const levelHard = document.getElementById('levelHard');
const stopButton = document.getElementById('stopButton');
const resumeButton = document.getElementById('resumeButton');
var timerRemaining = document.querySelector('.timeremaining .seconds');
var catMoveInterval;
var rate;

function start() {
  if (gameLevel !== "") {
    if (gameLevel === 'levelEasy') {
    timer = 30;
    rate = 1000;
    } else if (gameLevel === 'levelHard') {
      timer = 20;
      rate = 500;
    }
    timerRemaining.textContent = timer;
    countdownInterval = setInterval(countdown, 1000);
    displayCat();
    catMoveInterval = setInterval(displayCat, rate);
    startButton.disabled = true;
  }
    // } else {
    // alert("Please choose a level.");
    // }
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
  currentScore = 0;
  score.textContent = currentScore;
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
  // if (timer !== -1) {
  alert('Time is up game has now ended your score is as follows: ' + currentScore);
  // resetGame();
      
  startButton.disabled = false;
//   catImg.removeEventListener('click', incrementScore);
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
// startButton.addEventListener('click', function() {
//   start();
// });



// resetButton.addEventListener('click', reset);
// catImg.addEventListener('click', incrementScore);
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


function stopGame() {
  clearInterval(countdownInterval);
  clearInterval(catMoveInterval);
  startButton.disabled = false;
  stopButton.disabled = true;
  catImg.removeEventListener('click', incrementScore);
  stopButton.removeEventListener('click', stopGame)
 
}
stopButton.addEventListener('click', stopGame)

function resumeButton

});

