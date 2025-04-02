function getComputerChoice () { 
    let choiceNum = Math.floor(Math.random() * 3);     // Create choiceNum variable & Assign a random number from 0-2 
    if (choiceNum === 0) {                             // IF  choiceNum = 0->"Rock", 1->"Paper", 2->"Scissors"
        getComputerChoice = "rock";             
    } else if (choiceNum === 1) {               
        getComputerChoice = "paper";            
    } else {                                    
        getComputerChoice = "scissors";         
    }                                          
}
getComputerChoice();                             
console.log("Computer: " + getComputerChoice);  


function getHumanChoice () {                      
    let humanChoice = prompt( "Choose & enter one of: Rock Paper or Scissors");
    getHumanChoice = humanChoice.trim().toLowerCase();     // Create variable trimHumanChoice & transform answer to lowercase and trim off whitespaces
    //normally would check that its actually one of the options & re-prompt if not, but not bothering here, as instructed.
}
getHumanChoice();                       // Call getHumanChoice function
console.log("User: " + getHumanChoice)  //Print user choice to console

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {                          // compare human and computer choices
    if (getComputerChoice === getHumanChoice) {     // if same value, then report "Tie"
        console.log("Tie");
    } else if (getComputerChoice === "rock" && getHumanChoice === "paper" ||         // IF getComputerChoice is rock and getHumanChoice is paper, 
        getComputerChoice === "paper" && getHumanChoice === "scissors" ||            // or getComputerChoice is paper and getHumanChoice is scissors,
        getComputerChoice === "scissors" && getHumanChoice === "rock") {             // or compgetComputerChoice is scissors and getHumanChoice is rock
            console.log("User wins!");               // THEN print "User Wins"
            ++ humanScore;
    } else { 
        console.log("Computer Wins!");         // ELSE print "Computer Wins"
        ++ computerScore;
    }
    console.log("Score: User: " + humanScore + ", Computer: " + computerScore)
}
playRound();