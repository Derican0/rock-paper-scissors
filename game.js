function getComputerChoice() {
    let choice = getRandomInt(3);
    if (choice === 0) {
        return "rock"
    }
    else if (choice === 1) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getHumanChoice() {
    return prompt("What's your move? ");
}

function playRound(humanChoice, computerChoice) {
    let newHumanChoice = humanChoice.toLowerCase();
    if (newHumanChoice == computerChoice) {
        console.log(`A tie between ${humanChoice}!`);
    }

    else if ((newHumanChoice == "rock" && computerChoice == "scissors") ||
        (newHumanChoice == "paper" && computerChoice == "rock") ||
        (newHumanChoice == "scissors" && computerChoice == "paper")) {
        console.log(`You win! ${newHumanChoice} beats ${computerChoice}`);
        return "human";
    }
    else {
        console.log(`You lose! ${computerChoice} beats ${newHumanChoice}`);
        return "computer"
    }

}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let result = playRound(humanChoice, computerChoice);
        if (result === "human") {
            humanScore++;
        }
        else if (result === "computer") {
            computerScore++;
        }
    }

    if (humanScore > computerScore) {
        console.log("You win!");
    }
    else if (humanScore < computerScore) {
        console.log("You lose!")
    }
    else {
        console.log("A tie!")
    }
}

playGame();