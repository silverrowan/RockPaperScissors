function getComputerChoice () { // Create the function named "getComputerChoice"
    let choiceNum = Math.floor(Math.random() * 3);     // Create choiceNum variable & Assign a random number from 0-2 
    if (choiceNum === 0) {                  // IF  choiceNum = 0
        getComputerChoice = "rock";             // Assign getComputerChoice "Rock"
    } else if (choiceNum === 1) {               // ELSE IF choiceNum = 1
        getComputerChoice = "paper";            // Assign getComputerChoice "Paper"
    } else {                                    // ELSE
        getComputerChoice = "scissors";         // Assign getComputerChoice "Scissors"
    }                                           // ENDIF
}
getComputerChoice();               // CALL getComputerChoice function
console.log(getComputerChoice);    // Print value of getComputerChoice to the console