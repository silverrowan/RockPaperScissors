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

function cleanResponse (responseRaw) { //specifically, trimmed & lower case
    let response = responseRaw.trim().toLowerCase();
    return response;
}

function getHumanChoice () {                      
    let humanChoiceRaw = prompt( "Choose & enter one of: Rock Paper or Scissors");
    humanChoice = cleanResponse (humanChoiceRaw);
    //normally would check that its actually one of the options & re-prompt if not, but not bothering here, as instructed.
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playGame () {
    function playRound (humanChoice, computerChoice) {  // compare human and computer choices; nested in playGame per instructions
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
    // playRound(getHumanChoice(), getComputerChoice());
    // playRound(getHumanChoice(), getComputerChoice());
    // playRound(getHumanChoice(), getComputerChoice());
    // playRound(getHumanChoice(), getComputerChoice());
    // playRound(getHumanChoice(), getComputerChoice());
}

playGame();

//===============================UI Design===============================
//create user choice buttons
let rockBtn = document.createElement('button');
rockBtn.setAttribute('id','rock');
let paperBtn = document.createElement('button');
paperBtn.setAttribute('id','paper');
let scissorsBtn = document.createElement('button');
scissorsBtn.setAttribute('id','scissors');