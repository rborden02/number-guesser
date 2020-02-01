let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

generateTarget = () => {
    const target = Math.floor(Math.random() * 9);
    return target;
};

compareGuesses = (currentHumanGuess, computerGuess, target) => {
    let humanCompare = Math.abs(currentHumanGuess - target);
    let compCompare = Math.abs(computerGuess - target);

    if (humanCompare === compCompare || humanCompare < compCompare) {
        return true;
    } else {
        return false;
    };
};

updateScore = (winner) => {
    if (winner === 'human') {
        humanScore++;
    } else {
        computerScore++;
    };
};

advanceRound = () => currentRoundNumber++;




