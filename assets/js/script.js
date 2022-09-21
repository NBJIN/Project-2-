var currentScore=0;


const cat0 = document.getElementsByClassName('catm0');
const square = document.getElementsByClassName("square");
const score = document.getElementsByClassName("score");
let scoreValue = 0;
let catm0;
let style;
let visibility;
let visible;
let catm;
let random;
let setTimeout;
let timer = 20;

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

const startBtn = document.getElementsByClassName('buttonstart')[0];

function start() {
      //Stop showing play button
      startBtn.style.display = 'none';
      // Enter game
      enterGame();
      startTimer();
}

function startTimer() {
      setInterval(function() {
            timer--;
            console.log(timer);
      }, 1000);
      }

function enterGame() {
      hideCats();
      setInterval(function() {
            displayCat();
            if (timer === 0) {
                  endGame();
                  timer = -1;
            } else {
                  enterGame();
            }
      }, 2000);
}

function endGame() {
      alert(`Game over, your time has run out, you have a score of ${scoreValue}`);
}

function hideCats() {
      // Hide Cats
      cat1.style.display = 'none';
      cat2.style.display = 'none';
      cat3.style.display = 'none';
      cat4.style.display = 'none';
      cat5.style.display = 'none';
      cat6.style.display = 'none';
      cat7.style.display = 'none';
      cat8.style.display = 'none';
      cat9.style.display = 'none';

}

function displayCat() {
      const randomNumber = Math.floor(Math.random() *9);
      if (randomNumber ===1) {
            cat1.style.display = 'block';
      } else if (randomNumber === 2) {
            cat2.style.display = 'block';
      } else if (randomNumber === 3) {
            cat3.style.display = 'block';
      } else if (randomNumber === 4) {
            cat4.style.display = 'block';
      } else if (randomNumber === 5) {
            cat5.style.display = 'block';
      } else if (randomNumber === 6) {
            cat6.style.display = 'block';
      } else if (randomNumber === 7) {
           cat7.style.display = 'block';
      } else if (randomNumber === 8) {
            cat8.style.display = 'block';
      } else  {
            cat9.style.display = 'block';
      }
      }

      /** 

function start() {
      cat0[0].style.visibility = 'hidden';
     
      document.getElementsByClassName('catm1')[0].style.visibility='hidden';
      document.getElementsByClassName('catm2')[0].style.visibility='hidden';
      document.getElementsByClassName('catm3')[0].style.visibility='hidden';
      document.getElementsByClassName('catm4')[0].style.visibility='hidden';
      document.getElementsByClassName('catm5')[0].style.visibility='hidden';
      document.getElementsByClassName('catm6')[0].style.visibility='hidden';
      document.getElementsByClassName('catm7')[0].style.visibility='hidden';
      document.getElementsByClassName('catm8')[0].style.visibility='hidden';

      document.getElementsByClassName('buttonstart')[0].style.visibility='hidden';

      for(var i=0;i<square.length;i++){
            document.getElementsByClassName("score")[0].style.visibility="visible";
      
      }
      for(var i=0;i<square.length;i++){
            document.getElementsByClassName('square')[i].style.visibility="visible";
      }

      setInterval(() => {
            var random=Math.floor(Math.random()*9)+1;
            document.getElementsByClassName("catm"+random).style.visibility="visible";
            setTimeout(() => { 
                  for(var i=0;i<square.length;i++){
                        document.getElementsByClassName('catm')[i].style.visibility='hidden';
                  }
                  
            }, 900);

      }, 1000);
}
     
     
   