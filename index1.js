const hand = ["ROCK", "PAPER", "SCISSORS"];

function getComputerChoice(){
    const random = Math.floor(Math.random() * hand.length);
    return hand[random];
}

function getPlayerChoice() {
    let valid = false
    while (valid == false) {
        const input = prompt("ROCK, PAPER, or SCISSORS? Spelling matters. 5 rounds.");
        if (input == null) {
            continue;
        }
        let upperInput = input.toUpperCase();
        if (hand.includes(upperInput) == true) {
            valid = true;
            return upperInput
        }
    }
}

function checkWin(playerSelection, computerSelection) {
    if ((playerSelection == "ROCK" && computerSelection == "SCISSORS") || 
        (playerSelection == "SCISSORS" && computerSelection == "PAPER") || 
        (playerSelection == "PAPER" && computerSelection == "ROCK")) {
        // if player wins
        return "player";
    } else if (playerSelection == computerSelection) {
        // tie
        return "tie";
    } else {
        //comp wins
        return "computer";
    }
}

function playRound(playerSelection, computerSelection) {
    let winner = checkWin(playerSelection, computerSelection);
    if (winner == "player") {
        return `You Win. ${playerSelection} beats ${computerSelection}!`;
    } else if (winner == "computer") {
        return `You Lose. ${playerSelection} loses to ${computerSelection}!`;
    } else {
        return `Tie. ${playerSelection} is equal to ${computerSelection}!`;
    }
}

function game() {
    let playerWins = 0;
    let compWins = 0;
    for (let i = 0; i < 5; i++) {
      const playerChoice = getPlayerChoice();
      const compChoice = getComputerChoice();
      console.log(playRound(playerChoice, compChoice));

      if (checkWin(playerChoice, compChoice) == "player") {
        ++playerWins
      } else if (checkWin(playerChoice, compChoice) == "computer") {
        ++compWins
      }
    }
    return [playerWins, compWins]
}

function finalScore() {
    let playGame = game();
    console.log(`Final score. You vs Computer: [${playGame[0]} - ${playGame[1]}]`)
}

// Actually play
finalScore()