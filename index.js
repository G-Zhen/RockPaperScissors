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
        return ["You Win!", `You Win. ${playerText} beats ${computerSelection}!`];
    } else if (playerText == "SCISSORS" && computerSelection == "ROCK" || playerText == "PAPER" && computerSelection == "SCISSORS" || playerText == "ROCK" && computerSelection == "PAPER") {
        // if computer wins
        return ["You Lose!", `You Lose. ${playerText} loses to ${computerSelection}!`];
    } else if (playerText == computerSelection) { 
        // if tie 
        return ["Tie Game.", `Tie. ${playerText} is equal to ${computerSelection}!`];
    } else {
        // --> null value with no input or not R,p,s --> try again? 
        return "Improper value.";
    }
    
}

function game(playerSelection, computerSelection) {
    // plays the game for 5 rounds. Keeps score. Announces overall winner (at least 3 wins)
    let playerWins = 0;
    let compWins = 0;

    for (let i = 0; i < 5; i++) {
        let results = playRound(playerSelection, computerSelection);

        if (results[0] == "You Win!") {
            ++playerWins;        
        } else if (results[0] == "You Lose!") {
            ++compWins;
        } 
    }
    return [playerWins, compWins];
}

// Actually start playing
let user = prompt("Enter your hand"); //user enters their choice

console.log(playRound(user, getComputerChoice())); // check playRound(p, c); works

console.log('check last function');
console.log(game(user, getComputerChoice()))


