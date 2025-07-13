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

/*
function getHumanChoice() {
    return prompt("What's your move? ");
}
*/

function playRound(humanChoice, computerChoice) {
    let newHumanChoice = humanChoice.toLowerCase();
    let div;
    if (newHumanChoice == computerChoice) {
        div = document.createElement("div");
        div.textContent = `A tie between ${humanChoice}!`;
    }

    else if ((newHumanChoice == "rock" && computerChoice == "scissors") ||
        (newHumanChoice == "paper" && computerChoice == "rock") ||
        (newHumanChoice == "scissors" && computerChoice == "paper")) {
        div = document.createElement("div");
        div.textContent = `You win! ${newHumanChoice} beats ${computerChoice}!`;
        humanScore++;
    }
    else {
        div = document.createElement("div");
        div.textContent = `You lose! ${computerChoice} beats ${newHumanChoice}!`
        computerScore++;
    }
    const result = document.querySelector(".results");
    result.appendChild(div);
    totalScore++;
    const human = document.querySelector(".human-score");
    human.textContent = humanScore;
    const computer = document.querySelector(".computer-score");
    computer.textContent = computerScore;
    const total = document.querySelector(".total-score");
    total.textContent = totalScore;

    const res = document.createElement("div");
    res.style.color = "blue";
    if (humanScore === 5) {
        res.textContent = "You win!";
    }
    else if (computerScore === 5) {
        res.textContent = "You lose!";
    }
    result.appendChild(res);

}

let humanScore = 0;
let computerScore = 0;
let totalScore = 0;

const rock = document.querySelector(".rock");
rock.addEventListener("click", () => { playRound("rock", getComputerChoice()) });
const scissors = document.querySelector(".scissors");
scissors.addEventListener("click", () => { playRound("scissors", getComputerChoice()) });
const paper = document.querySelector(".paper");
paper.addEventListener("click", () => { playRound("paper", getComputerChoice()) });


/*
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
*/