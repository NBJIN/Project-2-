

function welcome () {
	console.log("Welcome to Catch The Black Cat Game!");
}
/*

let catm;
let square;
let buttonstart;
let score;
function buttonstart() {
      document.getElementByclass("catm").style.visibility='hidden';
      document.getElementByclass("square").style.visibility='hidden';
      document.getElementByclass("buttonstart").style.visibility='hidden';
}

for(var i=0;i<2;i++){
      document.getElementsByClassName("score")[i].style.visibility='visible'
}
for(var i=0;i<9;i++){
      document.getElementsByClassName("square")[i].style.visibility="visible";
}
setInterval(() => {
      var random=Math.floor(Math.random()*9)+1;
      document.getElementById("catm" +random).style.
      visibility="visible";
      setTimeout(() => {
            for(var i=0;i<9;i++){ document.getElementsByClassName("catm")[i].style.visibility="hidden";} }, 900); }, 1000);
      
function clicked() {
      document.getElementsByClassName("buttonstart").innerHTML=buttonstart++;
}
