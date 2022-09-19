function getComputerChoice() {
    //Computer: return random "Rock", "Paper", "Scissors"
    const hand = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * hand.length);
    const r = "Rock";
    const p = "Paper";
    const s = "Scissors";
    
    if (random == 1) {
        return r;
    } else if (random == 2) {
        return p;
    } else {return s};
}
console.log(getComputerChoice())

function playRound(playerSelection, computerSelection) {
    // Plays 1 round 
    // User answer (rock, Rock, ROck, etc) will not be case sensitive
    let state = "Placement";
    
    
    // if player wins
    // return `You Win. ${playerSelection} beats ${computerSelection}!`

    // if computer wins
    // return `You Lose. ${computerSelection} beats ${playerSelection}!`

    // if tie 
    // return `Tie Game. ${playerSelection} is equal to ${computerSelection}!`
}

function game() {
    // plays the game for 5 rounds. Keeps score. Announces overall winner (at least 3 wins)

    for (let i = 0; i < 5; i++) {
        //run playRound()
        //increment overall wins
        
    }
    
}

