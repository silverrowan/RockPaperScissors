//Create function getComputerChoice
function getComputerChoice() {
    //declare function: get integer between values a and b, inclusive, a = lowest value, b=highest value
    function randomInteger(a, b) { 
        return Math.floor( Math.random() * b + a );
    }

    //get randomInteger from 1-3, assign to computerChoice
    let random123 = randomInteger( 1, 3 ); 
    let randomRockPaperScissors;

    //use computerChoice number to set Rock/paper/scissors
    if (random123 === 1) { 
        randomRockPaperScissors = "rock";
    } else if (random123 === 2) {
        randomRockPaperScissors = "paper";
    } else if (random123 === 3) {
        randomRockPaperScissors = "scissors";
    } else {console.log("variable randomNumber out of bounds");}
    return randomRockPaperScissors;
}

//Create Function getHumanChoice
function getHumanChoice() {
    //Create Function cleanText, to trim, lowercase, and de-punctuate responce
    function cleanText (text) {
        return text.replaceAll(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").trim().toLowerCase();
    }

    //prompt user for choice and record in (new) variable userChoice, and clean the string
    let userPromptChoice = cleanText( prompt("Choose one of: rock, paper, or scissors.", "") );
    return userPromptChoice;
}

// CREATE win tracking variables
let userWins = 0, computerWins = 0, ties = 0;

// CREATE Function gameWinner: win logic & increase & user entry check
function gameWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        console.log("You Tie.");
        ties += 1;
    } else if ( !( userChoice === "rock" || userChoice === "paper" || userChoice === "scissors" ) ) {
        console.warn(`invalid entry, please choose one of rock, paper, or scissors next time.`); //checks user responce is a valid choice
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
//CREATE function playGame: run 5 rounds of rock paper scissors and report the total scores
function playGame() {
    //CREATE function playRound
    function playRound () {
    let computerChoice = getComputerChoice();
    let userChoice = getHumanChoice();
    gameWinner(userChoice, computerChoice);
    }

    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    let scoreMessage = `user Wins:${userWins} computer Wins:${computerWins} ties:${ties}`;
    console.log(`final scores: ${scoreMessage}`);
}

playGame()

/*
ONCE have UI:
reset game?
----
CREATE function reset
    SET variables userWins computerWins and ties to 0
    SET variable message to "lets play again"

----------------------
these are all the parts, but something is wonky w/ stringing them together
    might just be b/c its not supposed to reset until 5 loops, but as I know single rounds arent the goal, its not really worth spending time puzzling it out. */ 