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
const score = document.getElementsByClassName(".score .value");
var timerRemaining = document.querySelector('.timeremaining .seconds');
var catMoveInterval;

startButton.addEventListener('click', start);
resetButton.addEventListener('click', reset);
catImg.addEventListener('click', incrementScore);


function start() {
  countdownInterval = setInterval(countdown, 1000);
  displayCat();
  catMoveInterval = setInterval(displayCat, 1000);
  startButton.disabled = true;
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


// function to enter game 
// function enterGame() {
//   clearInterval(countdownInterval);
//   alert('The Game has now ended your score is: ' + currentScore);
// }

// var randomIndex = Math.floor(Math.random() * square.length);
//   square[randomIndex].appendChild(catImg);
//   catImg.addEventListener('click', incrementScore);


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

//     catImg.addEventListener('click', incrementScore);
//   } else {
//     catImg.removeEventListener('click', incrementScore);
//  }
// }


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
     
   









// Once game is started the startTimer Functiion starts

// function startTimer() {
//       setInterval(() => {
//             timer --;
//             console.log(timer);

//             if(timer === 0) {
//                   gameOver();
//                   timer = -1;
//             }
//       }, 1000);
//       }


// }





// function catsHide() {
//        if (currentSquare !== null) {
//             const selectSquare = square[selectSquare];
//             targetSquare.innerHTML = '';
//             currentSquare = null;
//       }
// }


