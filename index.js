var n = Math.floor(Math.random()*6)+1;
document.querySelector(".img1").setAttribute("src", "images/dice"+n+".png");

var m = Math.floor(Math.random()*6)+1;
document.querySelector(".img2").setAttribute("src", "images/dice"+m+".png");

if(n>m){
  document.querySelector("h1").textContent="Player 1 WINS!";
}
else if(m>n){
  document.querySelector("h1").textContent="Player 2 WINS!";
}
else if(n=m){
  document.querySelector("h1").textContent="DRAW!";
}