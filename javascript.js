function getComputerChoice () { // Create the function named "getComputerChoice"
    let choiceNum = Math.floor(Math.random() * 3);     // Create choiceNum variable & Assign a random number from 0-2 
    console.log(choiceNum);
    if (choiceNum === 0) {        // IF  choiceNum = 0
        getComputerChoice = "Rock";             // Assign getComputerChoice "Rock"
    } else if (choiceNum === 1) {         // ELSE IF choiceNum = 1
        getComputerChoice = "Paper";            // Assign getComputerChoice "Paper"
    } else {                                    // ELSE
        getComputerChoice = "Scissors";         // Assign getComputerChoice "Scissors"
    }                                           // ENDIF
}
getComputerChoice();               // CALL getComputerChoice function
console.log(getComputerChoice);    // Print value of getComputerChoice to the console