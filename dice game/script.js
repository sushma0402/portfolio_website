'use strict';

//VARIABLES

let newGame = document.querySelector('.btn--new');

let roll = document.querySelector('.btn--roll');

let hold = document.querySelector('.btn--hold');

let score1 = document.querySelector('#score--0');

let score2 = document.querySelector('#score--1');

let currScore1 = document.querySelector('#current--0');

let currScore2 = document.querySelector('#current--1');

let player = document.querySelectorAll('.player');

let player1Name = document.querySelector('#name--0');

let player2Name = document.querySelector('#name--1');

let activeCurrScore, activeScore, activePlayer;

let dice = document.querySelector('.dice');

let i, randNum;

//FUNCTIONS

function initialState() {
  score1.textContent = 0;
  score2.textContent = 0;
  currScore1.textContent = 0;
  currScore2.textContent = 0;
  dice.classList.add('hidden');
}

function generateRandom() {
  return Math.floor(Math.random() * 6) + 1;
}

function hideDice() {
  dice.classList.add('hidden');
}

function changeTurn() {
  for (i = 0; i < 2; i++) {
    if (player[i].classList.contains('player--active')) {
      player[i].classList.remove('player--active');
    } else {
      player[i].classList.add('player--active');
    }
  }
}

//INITIAL STATE

initialState();

//NEW GAME

newGame.addEventListener('click', function () {
  document.querySelector('.player--winner').classList.remove('player--winner');
  player1Name.textContent = 'Player 1';
  player2Name.textContent = 'Player 2';
  initialState();
});

//ROLL DICE

roll.addEventListener('click', function () {
  activeCurrScore = document.querySelector('.player--active .current-score');
  randNum = generateRandom();

  dice.src = 'dice-' + randNum + '.png'; //changing the dice img

  if (dice.classList.contains('hidden')) {
    //unhide the dice if hidden
    dice.classList.remove('hidden');
  }

  if (randNum == 1) {
    //when dice shows 1 we fail and loose our turn

    activeCurrScore.textContent = 0; //setting current score of active player back to 0

    setTimeout(function () {
      hideDice(); //hide the dice to not confuse the next player

      changeTurn(); //next player's turn
    }, 300); // delay of 300ms so that the dice outcome is seen by the players for 300ms and then gets hidden
  } else {
    //dice outcome other than 1

    activeCurrScore.textContent = Number(activeCurrScore.textContent) + randNum; //adding the dice outcome to current score of active player
  }
});

//HOLD

hold.addEventListener('click', function () {
  activePlayer = document.querySelector('.player--active');
  activeScore = document.querySelector('.player--active .score');
  activeCurrScore = document.querySelector('.player--active .current-score');

  activeScore.textContent =
    Number(activeScore.textContent) + Number(activeCurrScore.textContent); //adding current score to total score of active player
  activeCurrScore.textContent = 0; //setting current score of active player back to 0
  hideDice(); //hide the dice to not confuse the next player

  //WINNER!!
  if (Number(activeScore.textContent) >= 100) {
    activePlayer.classList.add('player--winner');

    document.querySelector('.player--winner .name').textContent = 'WINNER!!';
  } else {
    changeTurn(); //next player's turn
  }
});
