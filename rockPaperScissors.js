// Computer Choice
// ----

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

let computerChoice = getComputerChoice();

// Get Human Choice 
// ----
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

let userChoice = getHumanChoice()


        //create 'invalid entry' function
        // function invalidUserChoice(variable, replacementUserChoice, message) {
        //     alert(message);
        //     return variable = replacementUserChoice; // problem here where the replacement value is not being applied. troubleshoot later if feel like it. not actually important for final though.
        // }
        //Check response is one of three options
        // userChoice === "rock" 
        //     || userChoice === "paper" 
        //     || userChoice === "scissors" 
        //     || invalidUserChoice( userChoice, "rock", `invalid entry, please choose one of rock, paper, or scissors next time. Choosing "rock" as your answer`)
        // if ( !( userChoice === "rock" || userChoice === "paper" || userChoice === "scissors" ) ) {
        //     invalidUserChoice( userChoice, "rock", `invalid entry, please choose one of rock, paper, or scissors next time. Choosing "rock" as your answer`)}
        //console.log("checked userChoice = " + userChoice)
        //(    CHECK user string matches options
        // IF NOT one of rock paper or scissors
        // THEN LOG error "user response is not rock paper or scissors, auto loss :("
        //     (final game will involve an interface with buttons to choose so no need to check string is accurate..... but then caps/not doesnt matter after all... eh. whatev. its the assignment.)

// CREATE win tracking variables
let userWins = 0, computerWins = 0, ties = 0;

// CREATE Function gameWinner
//game win logic & entry check: win recording variables created but not used yet

function gameWinner() {
    if (userChoice === computerChoice) {
        console.log("You Tie");
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
        console.log(`You choose ${userChoice}, computer choose ${computerChoice}, You loose`);
    } 
    let scoreMessage = `user Wins: ${userWins} computer Wins:${computerWins} ties:${ties}`;
    console.log(scoreMessage);
}


/*
Rock/Paper/Scissors win, recordin, and display logic
----

LOG variable message to the console

reset game
----
CREATE function reset
    SET variables userWins computerWins and ties to 0
    SET variable message to "lets play again"

----------------------
these are all the parts, but something is wonky w/ stringing them together
    might just be b/c its not supposed to reset until 5 loops, but as I know single rounds arent the goal, its not really worth spending time puzzling it out. */ 