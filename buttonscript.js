
const body = document.querySelector('body');
let h = document.createElement('h2');
body.appendChild(h);

let humanScore = 0;
let computerScore = 0;
let score = document.createElement('h2');
body.appendChild(score);



let buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
	button.addEventListener('click', (e) => {
		let humanPlay = button.id;
		playRound(humanPlay.toUpperCase(), computerPlay());
	});
});


function playRound(playerSelection, computerSelection){
	
		if (playerSelection == computerSelection) {
			h.textContent =`It's a tie! Computer chose ${computerSelection} you chose ${playerSelection}`;
		}
		if (playerSelection == "ROCK" && computerSelection == "PAPER") {
			computerScore++;
			score.textContent = (`Your score: ${humanScore} Computer score: ${computerScore}`)
			h.textContent = (`Computer wins. Computer chose ${computerSelection}, you chose ${playerSelection}`);
		}
		if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
			humanScore++
			score.textContent = `Your score: ${humanScore}     Computer score: ${computerScore}`
			h.textContent = (`You Win! Computer chose ${computerSelection} you chose ${playerSelection}`);
		}
		if (playerSelection == "PAPER" && computerSelection == "ROCK") {
			humanScore++;
			score.textContent = `Your score: ${humanScore}     Computer score: ${computerScore}`
			h.textContent = (`You Win! Computer chose ${computerSelection} you chose ${playerSelection}`);
		}
		if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
			computerScore++;
			score.textContent = `Your score: ${humanScore}     Computer score: ${computerScore}`
			h.textContent = (`Computer wins. Computer chose ${computerSelection} you chose ${playerSelection}`);
		}
		if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
			humanScore++;
			score.textContent = `Your score: ${humanScore}     Computer score: ${computerScore}`
			h.textContent = (`You Win! Computer chose ${computerSelection} you chose ${playerSelection}`);
		}
		if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
			computerScore++;
			score.textContent = `Your score: ${humanScore}     Computer score: ${computerScore}`
			h.textContent = (`Computer wins. Computer chose ${computerSelection} you chose ${playerSelection}`);
		}

}

function computerPlay() {
		selection = Math.floor(Math.random()*3);
		switch (selection) {
			case 0:
				selection = "Rock";
				break;
			case 1:
				selection = "Paper";
				break;
			case 2:
				selection = "Scissors";
				break;
		}
		return selection.toUpperCase();
		}


