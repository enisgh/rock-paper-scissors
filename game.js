

function computerPlay() {
    // set array of rock, paper, scissor
    const choices = ['rock', 'paper', 'scissor'];

    // assign random number variable
    // randomly select rock, paper, scissor
    const randNum = Math.floor(Math.random() * 3);

    //assign selection to a variable
    let compPick = choices[randNum];
    return compPick;
}

function playRound(playerSelection, computerSelection) {
    // check for winner, playerSelection vs computerSelection
    
    // rock > scissor
    // scissor > paper
    // paper > rock

    // if computer chooses rock
    if (computerSelection === 'rock') {
        if (playerSelection.toLowerCase() === 'rock') {
            // return message string
            return `Tied. ${playerSelection} with ${computerSelection}`;
        } else if (playerSelection === 'paper') {
            // return message string
            ++playerScore;
            return `You win! ${playerSelection} beats ${computerSelection}`;
        } else if (playerSelection === 'scissor') {
            // return message string
            ++computerScore;
            return `You lose! ${computerSelection} beats ${playerSelection.toLowerCase()}.`;
        }
    }
    // if computer chooses paper
    else if (computerSelection === 'paper') {
        if (playerSelection.toLowerCase() === 'rock') {
            // return message string
            ++computerScore;
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        } else if (playerSelection === 'paper') {
            // return message string
            return `Tied. ${playerSelection} with ${computerSelection}`;
        } else if (playerSelection === 'scissor') {
            // return message string
            ++playerScore;
            return `You win! ${playerSelection} beats ${computerSelection}`;
        }
    }
    // if computer chooses scissor
    else if (computerSelection === 'scissor') {
        if (playerSelection.toLowerCase() === 'rock') {
            // return message string
            ++playerScore;
            return `You win! ${playerSelection} beats ${computerSelection}`;
        } else if (playerSelection === 'paper') {
            // return message string
            ++computerScore;
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        } else if (playerSelection === 'scissor') {
            // return message string
            return `Tied. ${playerSelection} with ${computerSelection}`;
        }
    }
}

var playerScore = 0;
var computerScore = 0;
var round = 0;

var playerSelection = prompt("Choose:");
var computerSelection = "";

function game(){
   for(i=0; i<5; i++)
    {
        computerSelection = computerPlay();
        console.log(playRound(playerSelection,computerSelection))
        
    }
    console.log(playerScore)
    console.log(computerScore)
}

game();


