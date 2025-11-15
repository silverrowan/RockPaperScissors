//Create starting UI
const gameBody = document.querySelector('.gameFrame');
let question = `Choose one of: rock, paper, or scissors. First to 5 points wins`
const questionDiv = document.createElement('div');
    questionDiv.textContent = question;
const btnGroupDiv = document.createElement('div');
const btnRock = document.createElement('button');
    btnRock.textContent = "Rock";
const btnPaper = document.createElement('button');
    btnPaper.textContent = "Paper";
const btnScissors = document.createElement('button');
    btnScissors.textContent = "Scissors";

btnGroupDiv.appendChild(btnRock);
btnGroupDiv.appendChild(btnPaper);
btnGroupDiv.appendChild(btnScissors);

gameBody.appendChild(questionDiv);
gameBody.appendChild(btnGroupDiv);

const roundMessageDiv = document.createElement('div');
const scoreMessageDiv = document.createElement('div');
const winnerAnnouncment = document.createElement('h3');

let userWins = 0, computerWins = 0, ties = 0; // CREATE win tracking variables

//get userChoice from button click, trigger playRound
// btnGroupDiv.addEventListener('click', (e) => {
//     let target = (e.target);  
//     switch (target.textContent) {
//         case 'Scissors' : 
//             userChoice = 'scissors';
//             break;
//         case 'Rock' : 
//             userChoice = 'rock';
//             break;
//         case 'Paper' : 
//             userChoice = 'paper';
//             break;
//         default :
//             console.log('invalid selection, please choose rock, paper, or scissors.');
//             break; //is this actually needed?
//     }
//     playRound(userChoice)
// });

btnGroupDiv.addEventListener('click', selectPlayerChoice);

function selectPlayerChoice(e) {
    let target = (e.target);  
    switch (target.textContent) {
        case 'Scissors' : 
            userChoice = 'scissors';
            break;
        case 'Rock' : 
            userChoice = 'rock';
            break;
        case 'Paper' : 
            userChoice = 'paper';
            break;
        default :
            console.log('invalid selection, please choose rock, paper, or scissors.');
            break; //is this actually needed?
    }
    playRound(userChoice)
}

function playRound (userChoice) {
    let computerChoice = getComputerChoice();
    let roundMessage = chooseRoundWinner(userChoice, computerChoice);
    announceRoundWinner(roundMessage)
    updateScore()
    checkGameOver()
};

function updateScore() {
    scoreMessageDiv.textContent = `Score: User: ${userWins}, Computer: ${computerWins}, Ties: ${ties}`;
    gameBody.appendChild(scoreMessageDiv);
};

function announceRoundWinner(roundMessage) {
    roundMessageDiv.textContent = roundMessage;
    gameBody.appendChild(roundMessageDiv);
};

function checkGameOver() {
    if (userWins >= 5) {
        gameWinner = 'You Win!';
        showWinMessage()
        askPlayAgain()
    } else if (computerWins >= 5) {
        gameWinner = 'Computer Wins!';
        showWinMessage()
        askPlayAgain()
    }
}

function showWinMessage() {
    const winMessage = document.createElement('div');
    winMessage.textContent = gameWinner;
    gameBody.appendChild(winMessage);
    deactivateChoiceButtons()
}

function askPlayAgain() {
        let playAgain = document.createElement('button');
        playAgain.textContent = 'Play again?';
        gameBody.appendChild(playAgain);
        playAgain.addEventListener('click', () => location.reload(false))
}

function deactivateChoiceButtons() {
    btnGroupDiv.removeEventListener('click', selectPlayerChoice);
    btnRock.style.color = "darkGrey";
    btnPaper.style.color = "darkGrey";
    btnScissors.style.color = "darkGrey";

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

//Choose a random number between (inclusive) "a" and "b"; 
//where "a" is the lowest value, and "b" the highest
function randomInteger(a, b) { 
        return Math.floor( Math.random() * b + a );
    }

// determine who "wins" this round and increment appropriate tracking variable
function chooseRoundWinner(userChoice, computerChoice) {
    let roundMessage = ''
    if (userChoice === computerChoice) {
        roundMessage = "You Tie this round.";
        ties += 1;
    } else if ( userChoice === "rock" && computerChoice === "scissors" 
        || userChoice === "paper" && computerChoice === "rock" 
        || userChoice === "scissors" && computerChoice === "paper" ) {
            userWins += 1;
            roundMessage = `You choose ${userChoice}, computer choose ${computerChoice}, You win the round!`;       
    } else {
        computerWins += 1;
        roundMessage = `You choose ${userChoice}, computer choose ${computerChoice}, You loose the round.`;
    } 
    return roundMessage;
}