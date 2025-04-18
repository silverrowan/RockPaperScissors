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
        humanChoice = // this doesnt work... rockBtn.textContent || paperBtn.textContent || scissorsBtn.textContent;
        computerChoice = getComputerChoice();

        console.log("Computer: " + computerChoice);
        console.log("User: " + humanChoice);
        if (computerChoice === humanChoice) {
            console.log("Tie");
        } else if (computerChoice === "rock" && humanChoice === "paper" ||         // IF getComputerChoice is rock and getHumanChoice is paper, 
            computerChoice === "paper" && humanChoice === "scissors" ||            // or getComputerChoice is paper and getHumanChoice is scissors,
            computerChoice === "scissors" && humanChoice === "rock") {             // or compgetComputerChoice is scissors and getHumanChoice is rock
                console.log(`User wins, ${humanChoice} beats ${computerChoice}!`);               // THEN print "User Wins"
                ++ humanScore;
        } else { 
            console.log(`Computer Wins, ${computerChoice} beats ${humanChoice}!`);
            ++ computerScore;
        }
        console.log("Score: User: " + humanScore + ", Computer: " + computerScore)
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
let resultBox = document.createElement('div')

//put the content on the page
pageBody.appendChild(userChoiceOptions); 
pageBody.appendChild(resultBox);