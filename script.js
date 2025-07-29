// Declare button and div constants
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const displayDiv = document.querySelector(".display");
const scoreReport = document.querySelector(".score-report");
const roundReport = document.querySelector(".round-report");

// Initialize score variables
let humanScore = 0;
let computerScore = 0;
let winningScore = 0;

// Display results in DOM
scoreReport.textContent = `Your Score: ${humanScore} VS Computer Score: ${computerScore}`;
roundReport.textContent = "The round winner is...";

// Declare getComputerChoice function
function getComputerChoice () {
    // Initialize a variable to a random number between 1 and 3, inclusive
    const randomNum = Math.floor(Math.random() * 3) + 1;

    // Return string for rock, paper, or scissors based on random number value
    switch (randomNum) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}

// Declare getHumanChoice function
function getHumanChoice (event) {
    // Return user choice between “rock”, “paper”, or “scissors”
    return event.target.value;
}

// Declare playGame function
function playGame(e) {
    // Obtain human and computer choices
    let humanPick = getHumanChoice(e);
    let computerPick = getComputerChoice();
    // Call playRound function
    playRound(humanPick, computerPick);

    // Display winner results
    if (humanScore === 5) {
        displayDiv.textContent = "You win the game!";
    } else if (computerScore === 5) {
        displayDiv.textContent = "Computer wins the game!";
    }
}

// Declare playRound function to compare human and computer choices
function playRound (humanChoice, computerChoice) {
    // If block for human choice being rock
    if (humanChoice === "Rock") {
        // Switch statement for computer choice
        switch (computerChoice) {
            case "Rock":
                roundReport.textContent = `${humanChoice} is the same as ${computerChoice}! Nobody wins!`;
                break;
            case "Paper":
                roundReport.textContent = `You lose! ${humanChoice} can't beat ${computerChoice}!`;
                ++computerScore;
                break;
            case "Scissors":
                roundReport.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
                ++humanScore;
                break;
        }
    } 
    // Else-if block for human choice being paper
    else if (humanChoice === "Paper") {
        switch (computerChoice) {
            case "Rock":
                roundReport.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
                ++humanScore;
                break;
            case "Paper":
                roundReport.textContent = `${humanChoice} is the same as ${computerChoice}! Nobody wins!`;
                break;
            case "Scissors":
                roundReport.textContent = `You lose! ${humanChoice} can't beat ${computerChoice}.`;
                ++computerScore;
                break;
        }
    }
    // Else-if block for human choice being scissors
    else if (humanChoice === "Scissors") {
        switch (computerChoice) {
            case "Rock":
                roundReport.textContent = `You lose! ${humanChoice} can't beat ${computerChoice}!`;
                ++computerScore;
                break;
            case "Paper":
                roundReport.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
                ++humanScore;
                break;
            case "Scissors":
                roundReport.textContent = `${humanChoice} is the same as ${computerChoice}! Nobody wins!`;
                break;
        }
    }

    // Update display div
    scoreReport.textContent = `Your Score: ${humanScore} | Computer Score: ${computerScore}`;
}

// Add event listeners to player selection buttons
rockBtn.addEventListener("click", (e) => {
    playGame(e);
});

paperBtn.addEventListener("click", (e) => {
    playGame(e);
});

scissorsBtn.addEventListener("click", (e) => {
    playGame(e);
});