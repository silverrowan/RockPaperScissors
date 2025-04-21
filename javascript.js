//===============================Game code and logic ===============================

function getRandomNum (minValue = 0, maxValue = 100) {
    let randomNum = Math.floor(Math.random() * ((maxValue-minValue) + 1))+ minValue; 
    return randomNum;
}

function getComputerChoice () {
    let computerChoice = getRandomNum(0,2);
    switch (computerChoice) {
        case 0: 
            computerChoice = "rock";
        break;
        case 1: 
            computerChoice = "paper";
        break;
        case 2: 
            computerChoice = "scissors";
        break;
    }
    return computerChoice;
}

let humanScore = 0;
let computerScore = 0;

    function playRound (humanChoice, computerChoice) {  // compare human and computer choices; nested in playGame per instructions
        humanChoice = humanChoice.currentTarget.innerText //Why/how does this work!? how is the event already linked to humanChoice? This is setting up that link.... 
        computerChoice = getComputerChoice();

        choiceBox.textContent = `You chose ${humanChoice}, Computer chose ${computerChoice}.`
        gameWinner.textContent = '';
        
        if (computerChoice === humanChoice) {
            resultBox.textContent = "Tie";
        } else if (computerChoice === "rock" && humanChoice === "paper" ||         // IF getComputerChoice is rock and getHumanChoice is paper, 
            computerChoice === "paper" && humanChoice === "scissors" ||            // or getComputerChoice is paper and getHumanChoice is scissors,
            computerChoice === "scissors" && humanChoice === "rock") {             // or compgetComputerChoice is scissors and getHumanChoice is rock
                resultBox.textContent = `${humanChoice} beats ${computerChoice}, you win the round!`;               // THEN print "User Wins" to resultDiv
                ++ humanScore;
        } else { 
            resultBox.textContent = `${computerChoice} beats ${humanChoice}, computer wins the round!`;
            ++ computerScore;
        }
        scoreBox.textContent = "Score: You: " + humanScore + ", Computer: " + computerScore

        if (computerScore == 5) {
            gameWinner.textContent = 'Computer scored 5 points, Computer wins the game!'
            computerScore = 0;
            humanScore = 0;
        } else if (humanScore == 5) {
            gameWinner.textContent = 'You scored 5 points, you win the game!'
            computerScore = 0;
            humanScore = 0;
        } 
    }

//===============================UI Design===============================
let pageBody = document.querySelector('body');

//create user choice buttons & container
let userChoiceOptions = document.createElement('div');

let rockBtn = document.createElement('button');
    rockBtn.textContent = 'rock';
let paperBtn = document.createElement('button');
    paperBtn.textContent = 'paper';
let scissorsBtn = document.createElement('button');
    scissorsBtn.textContent = 'scissors'
  
userChoiceOptions.appendChild(rockBtn);
userChoiceOptions.appendChild(paperBtn);
userChoiceOptions.appendChild(scissorsBtn);

rockBtn.addEventListener('click', playRound);
paperBtn.addEventListener('click', playRound);
scissorsBtn.addEventListener('click', playRound);

//create results notification & score tracker
let resultBox = document.createElement('div');
let scoreBox = document.createElement('div');
let choiceBox = document.createElement('div');
let gameWinner = document.createElement('div');

//put the content on the page
pageBody.appendChild(userChoiceOptions); 
pageBody.appendChild(choiceBox);
pageBody.appendChild(resultBox);
pageBody.appendChild(scoreBox);
pageBody.appendChild(gameWinner);