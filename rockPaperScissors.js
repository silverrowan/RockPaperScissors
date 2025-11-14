//Choose a random number between (inclusive) "a" and "b"; 
//where "a" is the lowest value, and "b" the highest
function randomInteger(a, b) { 
        return Math.floor( Math.random() * b + a );
    }

//Create starting UI
const gameBody = document.querySelector('.gameFrame');
let question = `Choose one of: rock, paper, or scissors`
const questionDiv = document.createElement('div');
    questionDiv.textContent = question;
const btnRock = document.createElement('button');
    btnRock.textContent = "Rock";
const btnPaper = document.createElement('button');
    btnPaper.textContent = "Paper";
const btnScissors = document.createElement('button');
    btnScissors.textContent = "scissors";

gameBody.appendChild(questionDiv);
gameBody.appendChild(btnRock);
gameBody.appendChild(btnPaper);
gameBody.appendChild(btnScissors);

let userWins = 0, computerWins = 0, ties = 0; // CREATE win tracking variables

const scoreMessage = document.createElement('div');
    scoreMessage.textContent = `Score: User: ${userWins}, Computer: ${computerWins}, Ties: ${ties}`;

gameBody.appendChild(scoreMessage);

//Add button listeners - try and use only one.
//listener -> =player choice function

//PLAY A ROUND
//INCREMENT SCORE (do i need to refresh the score div, or will it update?)
    //IF either COMPUTER OR USER score = 5, 
    // then declare them the winner

// let winner = Computer || User --determine from round win logic

const winMessage = document.createElement('div');
    winMessage.textContent = `${winner} Wins!`;


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