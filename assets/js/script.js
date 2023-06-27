// Define Variables
var currentScore = 0;
var timer = 20;
var countdownInterval;
var catImg = document.createElement('img');
catImg.src = "/assets/images/catm.png";
catImg.style.width = '80%';
catImg.style.height = '80%';


// const startButton = document.getElementById('startButton');
const cat0 = document.getElementsByClassName('catm0');

// const startBtn = document.getElementsByClassName('buttonstart')[0];
const startButton = document.getElementById('startButton');
const square = document.getElementsByClassName("square");
const score = document.getElementsByClassName("score");
var timerRemaining = document.querySelector('.timeremaining .seconds');

startButton.addEventListener('click', start);


function start() {
      countdownInterval = setInterval(countdown, 1000);

      displayCat();
      setInterval(displayCat, 1000);
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


// function to enter game 
function enterGame() {
      clearInterval(countdownInterval);
      alert('The Game has now ended your score is: ' + currentScore);
}

      var randomIndex = Math.floor(Math.random() * square.length);

      square[randomIndex].appendChild(catImg);

      catImg.addEventListener('click', incrementScore);

// Once game is started the startTimer Functiion starts
function startTimer() {
      setInterval(() => {
            timer --;
            console.log(timer);

            if(timer === 0) {
                  gameOver();
                  timer = -1;
            }
      }, 1000);
      }

// function that ends game once timer has finished
function endGame() {
      clearInterval(countdownInterval);

      if (timer !== -1) {
      alert('Time is up game has now ended your score is as follows: ' + currentScore);

      timer = -1;
      currentScore = 0;
      timerRemaining.textContent = timer;
      score[0].textContent = currentScore;

      catImg.removeEventListener('click', incrementScore);
}
}



function catsHide() {
       if (currentSquare !== null) {
            const selectSquare = square[selectSquare];
            targetSquare.innerHTML = '';
            currentSquare = null;
      }
}


// Display random cat
function displayCat() {
      for (var i = 0; i < square.length; i++) {
            square[i].innerHTML = '';
      }

      var randomIndex = Math.floor(Math.random() * square.length);

      square[randomIndex].appendChild(catImg);

      catImg.addEventListener('click', incrementScore);
}

     function incrementScore() {
            currentScore++;
            score[0].textContent = currentScore;
     }
     
   