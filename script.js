// TODO
// Announce a winner after 5 rounds (have to count the rounds somehow)

// Declare button and div constants
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const displayDiv = document.querySelector(".display");
const scoreReport = document.querySelector(".score-report");
const roundReport = document.querySelector(".round-report");

// Initialize variables for future storage of choice functions 
let humanPick;
let computerPick;

// Initialize variables humanScore and computerScore to 0
let humanScore = 0;
let computerScore = 0;

// Display results in DOM
scoreReport.textContent = `Your Score: ${humanScore} | Computer Score: ${computerScore}`;
roundReport.textContent = "The round winner is...";

// Declare getComputerChoice function
function getComputerChoice () {
    // Initialize a variable to a random number between 1 and 3, inclusive
    const randomNum = Math.floor(Math.random() * 3) + 1;

    // If random number is 1, 2, or 3, return string for rock, paper, or scissors
    if (randomNum === 1) {
        return "Rock";
    } else if (randomNum === 2) {
        return "Paper";
    } else if (randomNum === 3) {
        return "Scissors";
    }
}

// Declare getHumanChoice function
function getHumanChoice (event) {
    // Obtain and return user choice between “rock”, “paper”, or “scissors”
    const humanHandChoice = event.target.value;
    console.log(humanHandChoice);
    return humanHandChoice;
}

// Add event listeners to player selection buttons
rockBtn.addEventListener("click", (e) => {
    humanPick = getHumanChoice(e);
    computerPick = getComputerChoice();
    playRound(humanPick, computerPick);
});

paperBtn.addEventListener("click", (e) => {
    humanPick = getHumanChoice(e);
    computerPick = getComputerChoice();
    playRound(humanPick, computerPick);
});

scissorsBtn.addEventListener("click", (e) => {
    humanPick = getHumanChoice(e);
    computerPick = getComputerChoice();
    playRound(humanPick, computerPick);
});

// Declare playRound function to compare human and computer choices
function playRound (humanChoice, computerChoice) {
    // Use nested if-else statements to compare choices
    // If-else block for human choice being rock
    if (humanChoice === "Rock") {
        if (computerChoice === "Rock") {
            roundReport.textContent = `${humanChoice} is the same as ${computerChoice}! Nobody wins!`;
        }
        else if (computerChoice === "Paper") {
            roundReport.textContent = `You lose! ${humanChoice} can't beat ${computerChoice}!`;
            ++computerScore;
        }
        else if (computerChoice === "Scissors") {
            roundReport.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
            ++humanScore;
        }
    } 
    // Else-if block for human choice being paper
    else if (humanChoice === "Paper") {
        if (computerChoice === "Rock") {
            roundReport.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
            ++humanScore;
        }
        else if (computerChoice === "Paper") {
            roundReport.textContent = `${humanChoice} is the same as ${computerChoice}! Nobody wins!`;
        }
        else if (computerChoice === "Scissors") {
            roundReport.textContent = `You lose! ${humanChoice} can't beat ${computerChoice}.`;
            ++computerScore;
        }
    }
    // Else-if block for human choice being scissors
    else if (humanChoice === "Scissors") {
        if (computerChoice === "Rock") {
            roundReport.textContent = `You lose! ${humanChoice} can't beat ${computerChoice}!`;
            ++computerScore;
        }
        else if (computerChoice === "Paper") {
            roundReport.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
            ++humanScore;
        }
        else if (computerChoice === "Scissors") {
            roundReport.textContent = `${humanChoice} is the same as ${computerChoice}! Nobody wins!`;
        }
    }

    // Update display div
    scoreReport.textContent = `Your Score: ${humanScore} | Computer Score: ${computerScore}`;
}

// function playGame () {
//     // Control game based on winner
//     let winningScore = 0;
//     if (winningScore === 5) {
//         if (humanScore === winningScore) {
//             displayDiv.textContent = "You win!";
//         } else if (computerScore === winningScore) {
//             displayDiv.textContent = "Computer wins!";
//         }
//     }
// }

// playGame();
// playGame(5);