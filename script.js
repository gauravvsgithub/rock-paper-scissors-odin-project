function getComputerChoice() {
    let randomChoice = parseInt(Math.random() * 10) % 3
    let choices = ['rock', 'paper', 'scissors']
    return choices[randomChoice];
}

function getPlayerChoice() {
    let playerChoice = prompt('Enter your choice!');
    return playerChoice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    let result = '';
    switch (playerSelection) {
        case 'rock':
            switch (computerSelection) {
                case 'rock':
                    result = "It's a tie!";
                case 'paper':
                    result = "You Lose! Paper beats Rock.";
                    break;
                case 'scissors':
                    result = "You Win! Rock beats Scissors."
                    break;
            }
            break;
        case 'paper':
            switch (computerSelection) {
                case 'rock':
                    result = "You win! Paper beats Rock.";
                case 'paper':
                    result = "It's a tie!";
                    break;
                case 'scissors':
                    result = "You Lose! Scissors beats Paper."
                    break;
            }
            break;
        case 'scissors':
            switch (computerSelection) {
                case 'rock':
                    result = "You Lose! Rock beats Scissors.";
                case 'paper':
                    result = "You Win! Scissors beats Paper.";
                    break;
                case 'scissors':
                    result = "It's a tie!"
                    break;
            }
            break;
    }

    return result;
}

function game() {
    for(let i=0;i<5;i++) {
        console.log(playRound(getPlayerChoice(), getComputerChoice()));
    }
}

game();