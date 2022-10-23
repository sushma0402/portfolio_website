// on clicking the buttons
for(i=0; i<document.querySelectorAll(".drum-button").length ;i++){
  document.querySelectorAll(".drum-button")[i].addEventListener("click", function(){
   playSound(this.innerHTML);
   animate(this.innerHTML);
  });
}

//keyboard keys
document.addEventListener("keydown",function(event){
    playSound(event.key);
    animate(event.key);
});

//animations
function animate(alphabet){
  document.querySelector("."+alphabet).classList.add("drum-click");
  setTimeout(function(){
    document.querySelector("."+alphabet).classList.remove("drum-click");
  },100);
}

//sounds
function playSound(alphabet){
  if(alphabet === "w")
  {
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
  }
  else if(alphabet === "a")
  {
    var kick_bass = new Audio("sounds/kick-bass.mp3");
    kick_bass.play();
  }
  else if(alphabet === "s")
  {
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
  }
  else if(alphabet === "d")
  {
    var tom_1 = new Audio("sounds/tom-1.mp3");
    tom_1.play();
  }
  else if(alphabet === "j")
  {
    var tom_2 = new Audio("sounds/tom-2.mp3");
    tom_2.play();
  }
  else if(alphabet === "k")
  {
    var tom_3 = new Audio("sounds/tom-3.mp3");
    tom_3.play();
  }
  else if(alphabet === "l")
  {
    var tom_4 = new Audio("sounds/tom-4.mp3");
    tom_4.play();
  }
}
