var currentScore=0;

const catm0 = document.getElementsByClassName('catm0');
const square = document.getElementsByClassName('square');
const catm = document.getElementsByClassName("catm");
var random;
const visibility = document.getElementsByTagName("visible");

function start() {
      catm0[0].style.visibility = 'hidden';
     
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
            var random=Math.floor(Math.random()*8)+1;
            document.getElementsByClassName("catm" + random).style.visibility="visible";
            setTimeout(() => { 
                  for(var i=0;i<square.length;i++){
                        document.getElementsByClassName('catm')[i].style.visibility='hidden';
                  }
            }, 900);

      }, 1000);
}

var timeleft = 10;
var timeleft = setInterval(function() {
      if(timeleft <=0) {
            clearInterval(timeleft);
            document.getElementsByClassName("countdonw").innerHTML = "Finished";
      } else {
            document.getElementsByClassName("timeleft").innerHTML = timeleft
      }
timeleft -= 1;
}, 1000 );


function clicked(){
      document.getElementsByClassName("currentScore").innerHTML=currentScore++;
}