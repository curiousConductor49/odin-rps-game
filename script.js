// FUNCTION getComputerChoice
function getComputerChoice /* PASS IN: N/A */ () {
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
// ENDFUNCTION
}

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());