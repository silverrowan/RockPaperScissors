//Choose a random number between (inclusive) "a" and "b"; 
//where "a" is the lowest value, and "b" the highest
function randomInteger(a, b) { 
        return Math.floor( Math.random() * b + a );
    }
//Clean string by: converting to lowercase, removing puctuation, and trimming any 
//start or end whitespaces.
function cleanText (text) {
    return text.replaceAll(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").trim().toLowerCase();
}

//get responce from user and clean reply.
function getCleanResponse( promptMessage, defaultResponse ) { 
    let userResponse = cleanText( prompt(promptMessage, defaultResponse) );
    return userResponse;
}

//CREATE function playGame: run 5 rounds of rock paper scissors and report the total scores
function playGame() {
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

    function getUserChoice() { //Ask user to type rock/paper/scissors & clean thier response
        let userPromptChoice = getCleanResponse("Choose one of: rock, paper, or scissors.", "");
        return userPromptChoice;
    }
    //check user reply is rock/paper/scissors, choose the winnder if it is, or inform the user if it's not
    function checkValidUserChoice(userChoice, computerChoice) {
    let invalidMessage = `invalid entry, please choose one of rock, paper, or scissors next time.`
        if ( !( userChoice === "rock" || userChoice === "paper" || userChoice === "scissors" ) ) {
            alert(invalidMessage);
            console.warn(invalidMessage);
        } else {
            roundWinner(userChoice, computerChoice);
        }
    }

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

    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    let scoreMessage = `user Wins:${userWins} computer Wins:${computerWins} ties:${ties}`;
    console.log(`final scores: ${scoreMessage}`);

}

playGame()