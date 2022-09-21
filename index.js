const hand = ["ROCK", "PAPER", "SCISSORS"];

function getComputerChoice() {
    //Computer: return random "Rock", "Paper", "Scissors"
    const random = Math.floor(Math.random() * hand.length);
    return hand[random];
}

function getPlayerChoice() {
    valid = false
    // keep input box until valid answer is entered
    while (valid == false) {
        const input = prompt("ROCK, PAPER, or SCISSORS? Choose your hand.");
        if (input == null) {
            continue;
        }
    inputUpper = input.toUpperCase();
        if (hand.includes(inputUpper) == true) {
            return inputUpper;
        }
    }
}
console.log(getPlayerChoice())
function checkIsWinner() {

}

function playRound(playerSelection, computerSelection) {
    // Plays 1 round 
    let playerWins = 0;
    let compWins = 0;

    if (playerSelection == "ROCK" && computerSelection == "SCISSORS" || playerSelection == "SCISSORS" && computerSelection == "PAPER" || playerSelection == "PAPER" && computerSelection == "ROCK") {
        // if player wins
        ++playerWins
        return ["You Win!", `You Win. ${playerSelection} beats ${computerSelection}!`];
    } else if (playerSelection == "SCISSORS" && computerSelection == "ROCK" || playerSelection == "PAPER" && computerSelection == "SCISSORS" || playerSelection == "ROCK" && computerSelection == "PAPER") {
        // if computer wins
        ++compWins
        return ["You Lose!", `You Lose. ${playerSelection} loses to ${computerSelection}!`];
    } else if (playerSelection == computerSelection) { 
        // if tie 
        return ["Tie Game.", `Tie. ${playerSelection} is equal to ${computerSelection}!`];
    } 
    
}

function game(playerSelection, computerSelection) {
    // plays the game for 5 rounds. Keeps score. Announces overall winner (at least 3 wins)
    // why isnt this looping
    for (let i = 0; i < 5; i++) {
        console.log("before round")
        // playRound isnt activating during loop?
        playRound(playerSelection, computerSelection);
        console.log("after round")

        if (playerWins > compWins) {
            return 'You have completely beaten the computer';
        } else if (playerWins < compWins) {
            return 'You have been anhilated';
        } else if (playerWins == compWins) {
            return 'You are equals'
        }
    }

    //why when computer wins 1 round, gains 5 points?
    //return [playerWins, compWins];
}

// Actually start playing



