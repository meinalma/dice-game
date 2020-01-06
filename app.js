var scores, roundScore, activePlayer;
init();



function btn() {
  //1. random number
  var dice = Math.floor(Math.random() * 6 ) + 1;
  console.log(dice);

  //2. display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = "block";

    if(dice === 1){
      Swal.fire({
        title: 'One!',
        imageUrl: 'https://miro.medium.com/max/512/1*5i3bBsz_bMcGQ-UgDMCzQA.png',
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: 'Custom image',
        position: 'top',
        confirmButtonText: 'Next Player',
        confirmButtonColor: '#d1c3b7',
      })
    }
    if(dice === 2){
      diceDOM.setAttribute("src", "https://miro.medium.com/max/512/1*dqZhjZbsbEBDXzKQPAagXw.png");
    }
    if(dice === 3){
      diceDOM.setAttribute("src", "https://miro.medium.com/max/512/1*DrPdeWaJON0XbtmiEZc3jw.png");
    }
  if(dice === 4){
      diceDOM.setAttribute("src", "https://miro.medium.com/max/512/1*5w7bpE0KdwXc21zUQoOtOw.png");
    }
  if(dice === 5){
      diceDOM.setAttribute("src", "https://miro.medium.com/max/256/1*UYR8l1h7AI4MNtJWAugyjg.png");
    }
  if(dice === 6){
      diceDOM.setAttribute("src", "https://miro.medium.com/max/256/1*15_KIo9vPHULoA98NYT9jQ.png");
    }

  //3. update the round score if the rolled number was not a one
  if(dice > 1 ){
    //Add score
    roundScore += dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
  } else {
    //next player
    nextPlayer();
  }

}
document.querySelector('.btn-roll').addEventListener('click', btn);


function hold() {
  //Add current score to global score
  scores[activePlayer] += roundScore;

  //Update the UI
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
  //check if player won the game
  if(scores[activePlayer] >= 100){
    document.querySelector('#name-' + activePlayer).textContent = 'YOU WON!!';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
     } else {
       //next player
       nextPlayer();
     }
};
document.querySelector('.btn-hold').addEventListener('click', hold);

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}

//NEW GAME
document.querySelector('.btn-new').addEventListener('click', init);

function init() {
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;

  document.querySelector('#score-0').textContent = '0';
  document.querySelector('#score-1').textContent = '0';
  document.querySelector('#current-0').textContent = '0';
  document.querySelector('#current-1').textContent = '0';
  document.querySelector('#name-0').textContent = 'Player 1';
  document.querySelector('#name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');



  document.querySelector('.dice').style.display = "none";
}
