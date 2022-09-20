function getComputerChoice() {
    //Computer: return random "Rock", "Paper", "Scissors"
    const hand = ["ROCK", "PAPER", "SCISSORS"];
    const random = Math.floor(Math.random() * hand.length);
    return hand[random];
}

function playRound(playerSelection, computerSelection) {
    // Plays 1 round 
    // User answer (rock, Rock, ROck, etc) will not be case sensitive; converts all player inputs into all caps
    let playerText = playerSelection.toUpperCase();
    
    if (playerText == "ROCK" && computerSelection == "SCISSORS" || playerText == "SCISSORS" && computerSelection == "PAPER" || playerText == "PAPER" && computerSelection == "ROCK") {
        // if player wins
        return `You Win. ${playerText} beats ${computerSelection}!`;
    } else if (playerText == "SCISSORS" && computerSelection == "ROCK" || playerText == "PAPER" && computerSelection == "SCISSORS" || playerText == "ROCK" && computerSelection == "PAPER") {
        // if computer wins
        return `You Lose. ${computerSelection} beats ${playerText}!`;
    } else {
        // if tie 
        return `Tie Game. ${playerSelection} is equal to ${computerSelection}!`;
    }
}

function game() {
    // plays the game for 5 rounds. Keeps score. Announces overall winner (at least 3 wins)
    for (let i = 0; i < 5; i++) {
        let results = playRound();
        //increment overall wins
        let playerWins = 0;
        let compWins = 0;
        if (results == `You Win. ${playerText} beats ${computerSelection}!`) {
            ++playerWins;
        } else if (results == `You Lose. ${computerSelection} beats ${playerText}!`) {
            ++compWins;
        }    
    }
    return `Player: ${playerWins} - ${compWins} :Computer`;
}

// Actually start playing
let user = prompt("Enter your hand");

