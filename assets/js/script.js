// Load HTML content before JS // 
document.addEventListener('DOMContentLoaded', function() {

// Define Game Variables
var button = document.getElementById("modal-button");
var modal = document.querySelector(".instructions-modal");
var closeButton = document.querySelector(".close");
var currentScore = 0;
var score = document.getElementsByClassName("currentScore")[0];
var timer = 20;
var countdownInterval;
var catImg = document.createElement('img');
catImg.src = "assets/images/catm.png";
var gameLevel = "";
var gameStarted = false;

const startButton = document.getElementById('startButton');
const square = document.getElementsByClassName("square");
const levelEasy = document.getElementById('levelEasy');
const levelHard = document.getElementById('levelHard');
const levelButtons = document.querySelectorAll('.levelButton');
const resetButton = document.getElementById('resetButton');
var timerRemaining = document.querySelector('.timeremaining .seconds');
var catMoveInterval;
var rate;

// Modal for displaying instructions of game
button.onclick = function() {
  modal.style.display = "block";
}

closeButton.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 
// When level button is clicked it will 
// highlight the selected button
levelButtons.forEach(button => {
  button.addEventListener('click', function() {
    levelButtons.forEach(btn => btn.classList.remove('active-level'));
    this.classList.add('active-level');
    level(this.getAttribute('data-level'));
  });
});

// Function to initialize game state

function initializeGame() {
  level('levelEasy');
  timer = 30;
  timerRemaining.textContent = timer;
}

initializeGame();

// Function to reset score to 0 //

function resetScore() {
  currentScore = 0;
  score.textContent = currentScore;
}

// Function to start game and play at levelEasy or levelHard //
function start() {
  if (gameStarted) {
    return;
  }
  resetGame();
  if (gameLevel !== "") {
    if (gameLevel === 'levelEasy') {
    timer = 30;
    rate = 1000;
    } else if (gameLevel === 'levelHard') {
      timer = 20;
      rate = 700;
    }
    timerRemaining.textContent = timer;
    resetScore();
    countdownInterval = setInterval(countdown, 1000);
    displayCat();
    catMoveInterval = setInterval(displayCat, rate);
    startButton.disabled = true;
    gameStarted = true;
  }
}

// Function for two levels levelEasy and Level Hard //
function level(level) {
  if (gameStarted) {
    return;
  }
  gameLevel = level;
  levelButtons.forEach(btn => {
    if (btn.getAttribute('data-level') === level) {
      btn.classList.add('active-level');
    } else {
      btn.classList.remove('active-level');
    }
  });
  if (level === 'levelEasy') {
    timer = 30;
    rate = 1000;
  } else if (level === 'levelHard') {
    timer = 20;
    rate = 700;
  }
  timerRemaining.textContent = timer;
  resetScore();
}

// Function for countdown timer //

function countdown() {
  if (timer > 0) {
    timer--;
    timerRemaining.textContent = timer;
  }

  if (timer === 0) {
    endGame();
  }
}

// Function that ends the game //

function endGame() {
  clearInterval(countdownInterval);
  clearInterval(catMoveInterval);
  catImg.removeEventListener('click', incrementScore);

  alert('Time is up game has now ended your score is as follows: ' + currentScore);

  // levelButtons.forEach(btn => btn.classList.remove('active-level'));
  gameLevel = "";

  startButton.disabled = false;
  gameStarted = false;

}

// Function to reset game //

function resetGame() {
  clearInterval(countdownInterval);
  clearInterval(catMoveInterval);
  catImg.removeEventListener('click', incrementScore);
  timer = 0;
  timerRemaining.textContent = timer;
  currentScore = 0;
  score.textContent = currentScore;
  startButton.disabled = false;
  gameStarted = false;
  // levelButtons.forEach(btn=> btn.classList.remove('active-level'));
}

resetButton.addEventListener('click', resetGame);


// Function to display a random cat //

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

// Function to increment score //

function incrementScore(event) {
  var clickedElement = event.target;
  if (clickedElement.contains(catImg)) {
  
    currentScore++;
    score.textContent = currentScore;
    clickedElement.parentNode.removeEventListener('click', incrementScore);
  }
}

// Event Listeners for startbutton, leveleasy and levelhard //

startButton.addEventListener('click', start);

levelEasy.addEventListener('click', function() {
  level('levelEasy');
});

levelHard.addEventListener('click', function() {
  level('levelHard');
});



});
