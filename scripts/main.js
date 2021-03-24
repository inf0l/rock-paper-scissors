// main.js
// rock-paper-scissors

// Randomize computer selection
function computerPlay() {
    let play = Math.floor(Math.random() * 3);
    switch(play) {
	case 0: return 'Rock';
	case 1: return 'Paper';
	case 2: return 'Scissors';
    }
}

// Main game function
function game() {

    // Playing one round and returning a winner (unless it's a tie)
    function playRound(playerSelection, computerSelection) {
	gamesPlayed++;
	if (playerSelection == computerSelection) {
	    return 0
	} else if (playerSelection == 'Rock') {
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

    // Initialize games played and scorekeeping
    let gamesPlayed = 0;
    let playerScore = 0;
    let computerScore = 0;

    // Main loop repeats until one player reaches a score of 5
    while (playerScore < 5 && computerScore < 5) {
	console.log(`Games played: ${gamesPlayed}`)
	console.log(`Current score: Player: ${playerScore} vs Computer: ${computerScore}`)

	let playerSelection;
	const computerSelection = computerPlay();

	// Input validation
	let validPlay = false;
	while (validPlay == false) {
	    playerSelection = prompt('Rock, paper or scissors?');
	    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
	    if (playerSelection == 'Rock' || playerSelection == 'Paper' || playerSelection == 'Scissors') {
		validPlay = true;
	    }
	}

	// Start each round and determine the winner
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
	}
    }
}

game();
