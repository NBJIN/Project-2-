// Define Variables
var currentScore=0;

// const startButton = document.getElementById('startButton');
const cat0 = document.getElementsByClassName('catm0');

// const startBtn = document.getElementsByClassName('buttonstart')[0];
const startButton = document.getElementById('startButton');

const square = document.getElementsByClassName("square");
const score = document.getElementsByClassName("score");

let scoreValue = 0;
// let catm0;
// let style;
// let visibility;
// let visible;
// let catm;
// let random;
// let setTimeout;
let timer = 20;
// let start;
// let startButton

// document.addEventListener("DOMContentLoaded", function () {}


// Define 9 cats
const cat1 = document.getElementsByClassName("catm0")[0];
const cat2 = document.getElementsByClassName("catm1")[0];
const cat3 = document.getElementsByClassName("catm2")[0];
const cat4 = document.getElementsByClassName("catm3")[0];
const cat5 = document.getElementsByClassName("catm4")[0];
const cat6 = document.getElementsByClassName("catm5")[0];
const cat7 = document.getElementsByClassName("catm6")[0];
const cat8 = document.getElementsByClassName("catm7")[0];
const cat9 = document.getElementsByClassName("catm8")[0];



startButton.addEventListener('click', start);

function start() {
      //Stop showing play button
      // startButton.style.display = 'none';
      let timeRemaining = 20;

      const countdown = setInterval(() => {
            document.querySelector('.timeremaining .seconds').textContent = timeRemaining;
            timeRemaining--;
            if (timeRemaining < 0) {
                  clearInterval(countdown);
                  
                  alert('STOP - Game over!');
            }
      }, 1000);

      enterGame();
}
      // Enter game
//       enterGame();
//       startTimer();
// }


// function to enter game 
function enterGame() {
      catsHide();
      startTimer();
}

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

      // function to enter game
// function enterGame() {
//       hideCats();
      // setInterval(function() {
//       setInterval(() => {
          
//             displayCat();
//             if (timer === 0) {
//                   endGame();
//                   timer = -1;
//             } else {
//                   enterGame();
//             }
//       }, 2000);
// }

// function that ends game once timer has finished
function endGame() {
      alert(`Time is up game has now ended your score is as follows:  ${currentScore}`);
}



function catsHide() {
      // Hide Cats
      // cat1.style.display = 'none';
      // cat2.style.display = 'none';
      // cat3.style.display = 'none';
      // cat4.style.display = 'none';
      // cat5.style.display = 'none';
      // cat6.style.display = 'none';
      // cat7.style.display = 'none';
      // cat8.style.display = 'none';
      // cat9.style.display = 'none';
      for (var i = 0; i < squares.length; i++) {
            squares[i].innerHTML = ' ';
      }
}

// Display random cat
function displayCat() {
      // const randomNumber = Math.floor(Math.random() *9);
      // if (randomNumber ===1) {
      //       cat1.style.display = 'block';
      // } else if (randomNumber === 2) {
      //       cat2.style.display = 'block';
      // } else if (randomNumber === 3) {
      //       cat3.style.display = 'block';
      // } else if (randomNumber === 4) {
      //       cat4.style.display = 'block';
      // } else if (randomNumber === 5) {
      //       cat5.style.display = 'block';
      // } else if (randomNumber === 6) {
      //       cat6.style.display = 'block';
      // } else if (randomNumber === 7) {
      //      cat7.style.display = 'block';
      // } else if (randomNumber === 8) {
      //       cat8.style.display = 'block';
      // } else  {
      //       cat9.style.display = 'block';
      const randomNumber = Math.floor(Math.random() * 9);
      const catImg = document.createElement('img');
      catImg.src = "/assets/images/catm.png";
      catImg.className = 'catm' + randomNumber;

      squares[randomNumber1].appendChild(catImg)
      }
      // }

      // function display() {
      //       score;
      //       score.textContent = score
      // }

     
     
   