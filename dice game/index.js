

//dice1
var rand1 = Math.floor(Math.random()*6) + 1;
var source1 = "dice" + rand1 + ".png";
document.querySelector("#dice1").setAttribute("src",source1);


//dice2
var rand2 = Math.floor(Math.random()*6) + 1;
var source2 = "dice" + rand2 + ".png";
document.querySelector("#dice2").setAttribute("src",source2);

//heading
if(rand1 > rand2){
  document.querySelector("h1").textContent = "🎉 Player 1 wins!";
}
else if(rand2 > rand1){
  document.querySelector("h1").textContent = "Player 2 wins! 🎉";
}
else{
  document.querySelector("h1").textContent = "Its a Draw";
}
