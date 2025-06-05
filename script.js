// Declare getComputerChoice function
function getComputerChoice () {
    // Initialize a variable to a random number between 1 and 3, inclusive
    const randomNum = Math.floor(Math.random() * 3) + 1;

    // If random number is 1, 2, or 3, return string for rock, paper, or scissors
    if (randomNum === 1) {
        return "rock";
    } else if (randomNum === 2) {
        return "paper";
    } else if (randomNum === 3) {
        return "scissors";
    }
}

// Declare getHumanChoice function
function getHumanChoice () {
    // Obtain and return user choice between “rock”, “paper”, or “scissors”
    const humanHandChoice = prompt("Please pick one of the following options: \n• Rock\n• Paper\n• Scissors");
    return humanHandChoice;
}

// Initialize variables humanScore and computerScore to 0
let humanScore = 0;
let computerScore = 0;

// Declare playGame function
function playGame (roundNum) {
    // Declare playRound function to compare human and computer choices
    function playRound (humanChoice, computerChoice) {
        // Ensure case-insensitivity for humanChoice by converting its return value to all lowercase
        const humanChoiceLower = humanChoice.toLowerCase();

        // Use nested if-else statements to compare choices
        // If-else block for human choice being rock
        if (humanChoiceLower === "rock") {
            if (computerChoice === "rock") {
                console.log(`${humanChoiceLower} is the same as ${computerChoice}! Nobody wins!`);
            }
            else if (computerChoice === "paper") {
                console.log(`You lose! ${humanChoiceLower} can't beat ${computerChoice}!`);
                computerScore += 1;
            }
            else if (computerChoice === "scissors") {
                console.log(`You win! ${humanChoiceLower} beats ${computerChoice}!`);
                humanScore += 1;
            }
        } 
        // Else-if block for human choice being paper
        else if (humanChoiceLower === "paper") {
            if (computerChoice === "rock") {
                console.log(`You win! ${humanChoiceLower} beats ${computerChoice}.`);
                humanScore += 1;
            }
            else if (computerChoice === "paper") {
                console.log(`${humanChoiceLower} is the same as ${computerChoice}! Nobody wins!`);
            }
            else if (computerChoice === "scissors") {
                console.log(`You lose! ${humanChoiceLower} can't beat ${computerChoice}.`);
                computerScore += 1;
            }
        }
        // Else-if block for human choice being scissors
        else if (humanChoiceLower === "scissors") {
            if (computerChoice === "rock") {
                console.log(`You lose! ${humanChoiceLower} can't beat ${computerChoice}!`);
                computerScore += 1;
            }
            else if (computerChoice === "paper") {
                console.log(`You win! ${humanChoiceLower} beats ${computerChoice}.`);
                humanScore += 1;
            }
            else if (computerChoice === "scissors") {
                console.log(`${humanChoiceLower} is the same as ${computerChoice}! Nobody wins!`);    
            }
        }
    }

    // Initialize let variables for future storage of choice functions 
    let humanPick;
    let computerPick;

    // Use a for loop to call playRound function
    for (let i = 0; i < roundNum; i++) {
        humanPick = getHumanChoice();
        computerPick = getComputerChoice();
        playRound(humanPick, computerPick);
    }
}

playGame(5);