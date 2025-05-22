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
const humanChoice = prompt("Please pick one of the following options: \n• Rock\n• Paper\n• Scissors");
// PASS OUT: none
}
// ENDFUNCTION

// INIT variable humanScore to 0
const humanScore = 0;
// INIT variable computerScore to 0
const computerScore = 0;