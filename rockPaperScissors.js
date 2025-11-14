//Choose a random number between (inclusive) "a" and "b"; 
//where "a" is the lowest value, and "b" the highest
function randomInteger(a, b) { 
        return Math.floor( Math.random() * b + a );
    }

// CREATE win tracking variables
let userWins = 0, computerWins = 0, ties = 0;

//CREATE function playRound
function playRound () {
let computerChoice = getComputerChoice();
let userChoice = getUserChoice();
checkValidUserChoice(userChoice, computerChoice)
}

//have computer 'choose' random rock/paper/scissors via Math.random() method
function getComputerChoice() { 
    let random123 = randomInteger( 1, 3 ); 
    let randomRockPaperScissors;

    //use random number to set Rock/paper/scissors
    if (random123 === 1) { 
        randomRockPaperScissors = "rock";
    } else if (random123 === 2) {
        randomRockPaperScissors = "paper";
    } else if (random123 === 3) {
        randomRockPaperScissors = "scissors";
    } else {console.log("variable random123 out of bounds");}
    return randomRockPaperScissors;
}


//choose the winner
roundWinner(userChoice, computerChoice);


// determine who "wins" this round and increment appropriate tracking variable
// also doublechecks that user entered a valid choice
function roundWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        console.log("You Tie.");
        ties += 1;
    // } else if ( !( userChoice === "rock" || userChoice === "paper" || userChoice === "scissors" ) ) {
    //     console.warn(`invalid entry, please choose one of rock, paper, or scissors next time.`); //checks user responce is a valid choice
    } else if ( userChoice === "rock" && computerChoice === "scissors" 
        || userChoice === "paper" && computerChoice === "rock" 
        || userChoice === "scissors" && computerChoice === "paper" ) {
            userWins += 1;
            console.log(`You choose ${userChoice}, computer choose ${computerChoice}, You win!`);       
    } else {
        computerWins += 1;
        console.log(`You choose ${userChoice}, computer choose ${computerChoice}, You loose.`);
    } 
}