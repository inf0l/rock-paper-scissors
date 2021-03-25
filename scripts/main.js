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


    const container = document.querySelector('#container');
    const result = document.createElement('div');

    const currentPlay = document.createElement('p');
    currentPlay.textContent = ' ';
    result.appendChild(currentPlay);

    const again = document.createElement('div');
    const para_again = document.createElement('p');
    para_again.textContent = 'Would you like to play again?';
    again.appendChild(para_again);

    const yesButton = document.createElement('button');
    yesButton.innerHTML = 'Yes';
    yesButton.addEventListener('click', () => {
	container.removeChild(again);
	game();
    });
    again.appendChild(yesButton);

    const noButton = document.createElement('button');
    noButton.innerHTML = 'No';
    noButton.addEventListener('click', () => {
	throw new Error('User clicked No.');
    });
    again.appendChild(noButton);

    /* Initialize games played and scorekeeping */
    let gamesPlayed = 0;
    const games = document.createElement('p');
    games.textContent = `Games played: ${gamesPlayed}`;
    result.appendChild(games);

    let playerScore = 0;
    let computerScore = 0;
    const score = document.createElement('p');
    score.textContent = `Current score: Player: ${playerScore} Computer: ${computerScore}`
    result.appendChild(score);

    /* Create buttons for each available hand */
    const hands = ['Rock', 'Paper','Scissors'];
    for (let i = 0; i < hands.length; i++) {
	const btn = document.createElement('button');
	btn.innerHTML = hands[i];
	btn.id = hands[i];
	btn.addEventListener('click', () => {
	    play(`${hands[i]}`, computerPlay());
	});
	container.appendChild(btn);
    }

    /* Add results div below buttons */
    container.appendChild(result);

    /* Call playRound with button clicked */
    function play(playerSelection, computerSelection) {
	switch(playRound(playerSelection, computerSelection)) {
	    case 1:
		playerScore++
		currentPlay.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
		games.textContent = `Games played: ${gamesPlayed}`;
		score.textContent = `Current score: Player: ${playerScore} Computer: ${computerScore}`;
		break;
	    case 2:
		computerScore++;
		currentPlay.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
		games.textContent = `Games played: ${gamesPlayed}`;
		score.textContent = `Current score: Player: ${playerScore} Computer: ${computerScore}`;
		break;
	    case 0:
		currentPlay.textContent = 'That\'s a tie';
		games.textContent = `Games played: ${gamesPlayed}`;
		score.textContent = `Current score: Player: ${playerScore} Computer: ${computerScore}`;
		break;
	    default:
		console.log('Something went wrong...');
	}
	if (playerScore == 5) {
	    currentPlay.textContent = 'Congratulations! You won!';
	    games.textContent = '';
	    score.textContent = `Final score: Player: ${playerScore} Computer: ${computerScore}`;
	    setTimeout(() => { return playAgain(); }, 2000);
	} else if (computerScore == 5) {
	    currentPlay.textContent = 'You lost.. better luck next time';
	    games.textContent = '';
	    score.textContent = `Final score: Player: ${playerScore} Computer: ${computerScore}`;
	    setTimeout(() => { return playAgain(); }, 2000);
	}
    }

    /* Ask to play again after finished game. */
    function playAgain() {
	while (container.firstChild) {
	    container.removeChild(container.firstChild);
	}
	container.appendChild(again);

    }
}
game();
