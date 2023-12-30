
function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    let choice = options[Math.floor(Math.random()*options.length)];

    return choice;
}

let pScore = 0;
let cScore = 0;

function playRound(playerSelection, computerSelection){
    let p1 = playerSelection;
    let p2 = computerSelection;
    

    if (p1 === 'rock' && p2 === 'scissors' || p1 === 'scissors' && p2 === 'paper' || p1 === 'paper' && p2 === 'rock') {
        pScore = pScore + 1;
        return "You Win! " + p1 + " beats " + p2 + ". Player Score: " + pScore + " & Computer Score: " + cScore;
    }
    else if (p1 === 'scissors' && p2 === 'rock' || p1 === 'paper' && p2 === 'scissors' || p1 === 'rock' && p2 === 'paper') {
        cScore = cScore + 1;
        return "You Lose! " + p1 + " beats " + p2 + ". Player Score: " + pScore + " & Computer Score: " + cScore;
    }
    else if (p1 === p2) {
        return "Tie! Try again!"
    }
}

function game() {
    const playerSelection = prompt("Rock, Paper or Scissors? Make your choice! ").toLowerCase();    
    const computerSelection = getComputerChoice();

    console.log(playRound(playerSelection, computerSelection));

}

function loopGame(repeats = 5) {
    if (repeats > 0) {
        game();
        setTimeout(() => loopGame(repeats - 1), 3000);
    }
}

loopGame();
