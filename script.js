'use strict';
//console.log(document.querySelector('.message').textContent);

//document.querySelector('.message').textContent = '🥳 Correct Number!';
//document.querySelector('.guess').value = 55;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// refactoring code by creating functions!
const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}

const displaySecretNumber = function(number){
  document.querySelector('.number').textContent= number;
}

const displayScore = function(scoreDisplay){
  document.querySelector('.score').textContent= scoreDisplay;
}



document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
   // when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '😒NO NUMBER!';
    displayMessage('😒NO NUMBER!'); // better than writing document.querySelector....... every time!
  }
  // when the guess is correct! 
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉CORRECT NUMBER!';
    displayMessage('🎉CORRECT NUMBER!');
    // document.querySelector('.number').textContent = secretNumber;
    displaySecretNumber(secretNumber);
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    //highscore logic:
    if(score > highscore)
    {
      highscore = score;
      document.querySelector('.highscore').textContent =
      highscore;
    }
  }
  // better logic , no more duplicate codes!
  else if(guess!==secretNumber)
  {
    if(score>1)
    {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? '📈Too High!' : '📉Too Low!';
      displayMessage(guess > secretNumber ? '📈Too High!' : '📉Too Low!');
      score--;
      // document.querySelector('.score').textContent = score;
      displayScore(score);
    }
     else {
      // document.querySelector('.message').textContent = '💥GAME OVER!';
      displayMessage('💥GAME OVER!');
      document.querySelector('body').style.backgroundColor = '#800517';
        // document.querySelector('.score').textContent = 0;
        displayScore(0);
    }
  }

// DUPLICATE CODES , NO USE 🗑️
  // // when the guess is much higher then the number!
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈Too High!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥GAME OVER!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } 
  // //when the guess is much lower then the number!
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉Too Low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥GAME OVER!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click',function(){
secretNumber = Math.trunc(Math.random() * 20) + 1;  
score = 20;
// document.querySelector('.score').textContent= 20;
displayScore(20);
// document.querySelector('.message').textContent = 'Start guessing...';
displayMessage('Start guessing...');
document.querySelector('body').style.backgroundColor= '#222';
document.querySelector('.number').style.width= '15rem'; 
// document.querySelector('.number').textContent= '?';
displaySecretNumber('?');
document.querySelector('.guess').value= '';
document.query
});

// modal for "how to play" button
const modal = document.querySelector('.closeHelp');

// function for closing the modal
const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}


// button functionality for close button
const closeButton = document.querySelector('.closeButton');
closeButton.addEventListener('click', closeModal);

// button functionality for help button
const helpButton = document.querySelector('.help');
helpButton.addEventListener('click', function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
});


// functionality for clicking and pressing escape for removal of overlay!
const overlay = document.querySelector('.overlay');
overlay.addEventListener('click',closeModal);

document.addEventListener('keydown', function(e){
  console.log(e.key);
if(e.key === 'Escape' && !modal.classList.contains('hidden'))
closeModal();
});












