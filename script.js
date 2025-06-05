// FUNCTION getComputerChoice
function getComputerChoice /* PASS IN: none */ () {
// INIT variable randomNum to a random number between 1 and 3, inclusive
const randomNum = Math.floor(Math.random() * 3) + 1;
// IF random number is 1 THEN
if (randomNum === 1) {
    // PRINT string value “rock”
    return "rock";
} /* ELSE IF random number is 2 THEN */ else if (randomNum === 2) {
    // PRINT string value “paper”
    return "paper";
} /* ELSE IF random number is 3 THEN */ else if (randomNum === 3) {
    return "scissors";
}
// ENDIF
// PASS OUT: string value (”rock”, “paper”, or “scissors)
}
// ENDFUNCTION

// FUNCTION getHumanChoice
function getHumanChoice /* PASS IN: none */ () {
    // OBTAIN user choice between “rock”, “paper”, or “scissors”
    const humanHandChoice = prompt("Please pick one of the following options: \n• Rock\n• Paper\n• Scissors");
    // PASS OUT: user choice
    return humanHandChoice;
}
// ENDFUNCTION

// INIT variable humanScore to 0
let humanScore = 0;
// INIT variable computerScore to 0
let computerScore = 0;

// FUNCTION playRound 
function playRound (humanChoice, computerChoice) {
    // Pass In: humanChoice, computerChoice parameters (use respective   functions as callbacks for arguments)
    // COMPUTE case-insensitivity for humanChoice by converting its return value to all lowercase
    const humanChoiceLower = humanChoice.toLowerCase();
    // IF humanChoice is "rock" THEN
    if (humanChoice === "rock") {
        // IF computerChoice is "rock" THEN
        if (computerChoice === "rock") {
            // PRINT "Nobody wins!"
            console.log("Nobody wins!");
        }
        // ELSE IF computerChoice is "paper" THEN
        else if (computerChoice === "paper") {
            // PRINT "You lose! humanChoice can't beat computerChoice."
            console.log(`You lose! ${humanChoice} can't beat ${computerChoice}!`);
            // INCREMENT computerScore
            computerScore += 1;
        }
        // ELSE IF computerChoice is "scissors" THEN
        else if (computerChoice === "scissors") {
            // PRINT "You win! humanChoice beats computerChoice."
            console.log(`You lose! ${humanChoice} beats ${computerChoice}!`);
            // INCREMENT humanScore
            computerScore += 1;
        }
    }
}

const humanPick = getHumanChoice();
const computerPick = getComputerChoice();
playRound(humanPick, computerPick);
    
    
    // ELSE IF humanChoice is "paper" THEN
       // IF computerChoice is "rock" THEN
          // PRINT "You win! humanChoice beats computerChoice."
            // INCREMENT humanScore
        // ELSE IF computerChoice is "paper" THEN
            // PRINT "Nobody wins!"
        // ELSE IF computerChoice is "scissors" THEN
            // PRINT "You lose! humanChoice can't beat computerChoice."
            // INCREMENT computerScore
    // ELSE IF humanChoice is "scissors" THEN
        // IF computerChoice is "rock" THEN
            // PRINT "You lose! humanChoice can't beat computerChoice."
            // INCREMENT computerScore
        // ELSE IF computerChoice is "paper" THEN
            // PRINT "You win! humanChoice beats computerChoice."
            // INCREMENT humanScore
        // ELSE IF computerChoice is "scissors" THEN
            // PRINT "Nobody wins!"