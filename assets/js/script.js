// Define Variables
var currentScore = 0;
var timer = 20;
var countdownInterval;
var catImg = document.createElement('img');
catImg.src = "/assets/images/catm.png";
catImg.style.width = '80%';
catImg.style.height = '80%';


// const startButton = document.getElementById('startButton');
// const cat0 = document.getElementsByClassName('catm0');

// const startBtn = document.getElementsByClassName('buttonstart')[0];
const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');
const square = document.getElementsByClassName("square");
const score = document.getElementsByClassName("currentScore")[0];
var timerRemaining = document.querySelector('.timeremaining .seconds');
var catMoveInterval;

// startButton.addEventListener('click', start);
startButton.addEventListener('click', function() {
  countdownInterval = setInterval(countdown, 1000);
  displayCat();
  catMoveInterval = setInterval(displayCat, 1000);
  startButton.disabled = true;
});

resetButton.addEventListener('click', reset);
catImg.addEventListener('click', incrementScore);
levelEasy.addEventListener('click', level)
levelHard.addEventListener('click', level)

function selectLevel() {
  if (level === 'easy') {
    setTime = 30;
    randomIndex = 1000;
  } else if (level === 'hard') {
    setTime = 20;
    randomIndex = 500;
  }
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
  resetGame();
      
  startButton.disabled = false;
//   catImg.removeEventListener('click', incrementScore);
  }


function resetGame() {
  timer = 20;
  currentScore = 0;
  timerRemaining.textContent = timer;
  score.textContent = currentScore;
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


function incrementScore() {
   currentScore++;
   score.textContent = currentScore;
}


function reset() {
  resetGame();
  clearInterval(countdownInterval);
  clearInterval(catMoveInterval);
  startButton.disabled = false; 
}
