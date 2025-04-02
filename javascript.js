function getComputerChoice () { 
    let computerChoice;
    let choiceNum = Math.floor(Math.random() * 3);     // Create choiceNum variable & Assign a random number from 0-2 
    if (choiceNum === 0) {                             // IF  choiceNum = 0->"Rock", 1->"Paper", 2->"Scissors"
        computerChoice = "rock";             
    } else if (choiceNum === 1) {               
        computerChoice = "paper";            
    } else {                                    
        computerChoice = "scissors";         
    }                                          
    return computerChoice;
}


function getHumanChoice () {                      
    let humanChoiceRaw = prompt( "Choose & enter one of: Rock Paper or Scissors");
    humanChoice = humanChoiceRaw.trim().toLowerCase();     // Create variable trimHumanChoice & transform answer to lowercase and trim off whitespaces
    //normally would check that its actually one of the options & re-prompt if not, but not bothering here, as instructed.
    return humanChoice;
}


let humanScore = 0;
let computerScore = 0;

function playGame () {
    function playRound (humanChoice, computerChoice) {                          // compare human and computer choices
        console.log("Computer: " + computerChoice);
        console.log("User: " + humanChoice);
        if (computerChoice === humanChoice) {     // if same value, then report "Tie"
            console.log("Tie");
        } else if (computerChoice === "rock" && humanChoice === "paper" ||         // IF getComputerChoice is rock and getHumanChoice is paper, 
            computerChoice === "paper" && humanChoice === "scissors" ||            // or getComputerChoice is paper and getHumanChoice is scissors,
            computerChoice === "scissors" && humanChoice === "rock") {             // or compgetComputerChoice is scissors and getHumanChoice is rock
                console.log(`User wins, ${humanChoice} beats ${computerChoice}!`);               // THEN print "User Wins"
                ++ humanScore;
        } else { 
            console.log(`Computer Wins, ${computerChoice} beats ${humanChoice}!`);         // ELSE print "Computer Wins"
            ++ computerScore;
        }
        console.log("Score: User: " + humanScore + ", Computer: " + computerScore)
    }
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
}

playGame();