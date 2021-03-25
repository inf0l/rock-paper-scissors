/* main.js */
/* rock-paper-scissors */

/* Randomize computer selection */
function computerPlay() {
    let play = Math.floor(Math.random() * 3);
    switch(play) {
	case 0: return 'Rock';
	case 1: return 'Paper';
	case 2: return 'Scissors';
    }
}

function game() {

    /* Playing one round and returning the winner (unless it's a tie) */
    function playRound(playerSelection, computerSelection) {
	gamesPlayed++;
	if (playerSelection == computerSelection) return 0
	if (playerSelection == 'Rock') {
	    switch(computerSelection) {
		case('Scissors'): return 1
		case('Paper'): return 2
	    }
	} else if (playerSelection == 'Paper') {
	    switch(computerSelection) {
		case('Rock'): return 1
		case('Scissors'): return 2
	    } 
	} else {
	    switch(computerSelection) {
		case('Paper'): return 1
		case('Rock'): return 2
	    }
	}
    }

    /* Initialize games played and scorekeeping */
    let gamesPlayed = 0;
    let playerScore = 0;
    let computerScore = 0;

    const container = document.querySelector('#container');

    const rock = document.createElement('button');
    rock.innerHTML = 'Rock';
    rock.addEventListener('click', () => {
	play('Rock', computerPlay());
    });
    container.appendChild(rock);

    const paper = document.createElement('button');
    paper.innerHTML = 'Paper';
    paper.addEventListener('click', () => {
	play('Paper', computerPlay());
    }); 
    container.appendChild(paper);

    const scissors = document.createElement('button');
    scissors.innerHTML = 'Scissors';
    scissors.addEventListener('click', () => {
	play('Scissors', computerPlay());
    });
    container.appendChild(scissors);

    function play(playerSelection, computerSelection) {
	switch(playRound(playerSelection, computerSelection)) {
	    case 1:
		playerScore++
		console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
		break;
	    case 2:
		computerScore++;
		console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
		break;
	    case 0:
		console.log('That\'s a tie');
		break;
	    default:
		console.log('Something went wrong...');
	}
    }
}


game();
