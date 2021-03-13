var randomNumber1 = Math.floor(Math.random()*6)+1; // 1-6

var randomImgSrc = "images/dice"+ randomNumber1 + ".png"; // dice1-6

var doc1 = document.querySelectorAll("img")[0]; // src 1-6

doc1.setAttribute("src" , randomImgSrc);



var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImgSrc2 = "images/dice"+ randomNumber2 + ".png";

var doc2 = document.querySelectorAll("img")[1];

doc2.setAttribute("src" , randomImgSrc2);


if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML= "🚩Player 1 Wins!";
}
if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML= "Player 2 Wins!🚩"
}
if(randomNumber2 === randomNumber1){
  document.querySelector("h1").innerHTML= "Draw!";
}
