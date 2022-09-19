function getComputerChoice() {
    //return random "Rock", "Paper", "Scissors"
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