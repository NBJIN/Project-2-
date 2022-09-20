function welcome () {
      alert("Welcome to Catch The Black Cat Game!");
}

var currentScore=0;

function buttonstart() {
      document.getElementsByClassName('catm0').style.visibility='hidden';
      document.getElementsByClassName('catm1').style.visibility='hidden';
      document.getElementsByClassName('catm2').style.visibility='hidden';
      document.getElementsByClassName('catm3').style.visibility='hidden';
      document.getElementsByClassName('catm4').style.visibility='hidden';
      document.getElementsByClassName('catm5').style.visibility='hidden';
      document.getElementsByClassName('catm6').style.visibility='hidden';
      document.getElementsByClassName('catm7').style.visibility='hidden';
      document.getElementsByClassName('catm8').style.visibility='hidden';

      document.getElementsByClassName('buttonstart').style.visibility='hidden';

      for(var i=0;i<square.length;i++){
            document.getElementsByClassName("score")[i].style.visibility="visible";
      
      }
      for(var i=0;i<square.length;i++){
            document.getElementsByClassName('square')[i].style.visibility="visible";
      }
      setInterval(() => {
            var random=Math.floor(Math.random()*8)+1;
            document.getElementsByClassName("catm"+random).style.visibility="visible";
            setTimeout(() => { 
                  for(var i=0;i<square.length;i++){
                        document.getElementsByClassName('catm')[i].style.visibility='hidden';
                  }
            }, 900);

      }, 1000);
}

function clicked(){
      document.getElementsByClassName("currentScore").innerHTML=currentScore++;
}