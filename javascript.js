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
console.log("Computer: " + getComputerChoice);    // Print value of getComputerChoice to the console

function getHumanChoice () {    //     Create function getHumanChoice
    let humanChoice = prompt( "Choose & enter one of: Rock Paper or Scissors");     // Create variable humanChoice, Prompt User to "Enter Rock Paper or Scissors"
    getHumanChoice = humanChoice.trim().toLowerCase();     // Create variable trimHumanChoice & Transform answer to lowercase and trim off whitespaces
    //normally would check that its actually one of the options, but not bothering here, as instructed.
}
getHumanChoice();       // Call getHumanChoice function
console.log("User: " + getHumanChoice)  //Print user choice to console

function chooseWinner () {  // Create chooseWinner function - to compare human and computer choices
    if (getComputerChoice === getHumanChoice) {     // IF the getComputerChoice and getHumanChoice have the same value
        console.log("Tie")    // THEN print "Tie" to the console. 
    } else if (getComputerChoice === "rock" && getHumanChoice === "paper" ||         // IF getComputerChoice is rock and getHumanChoice is paper, 
        getComputerChoice === "paper" && getHumanChoice === "scissors" ||            // or getComputerChoice is paper and getHumanChoice is scissors,
        getComputerChoice === "scissors" && getHumanChoice === "rock") {          // or compgetComputerChoice is scissors and getHumanChoice is rock
            console.log("User wins!")        // THEN print "User Wins"
    } else { console.log("Computer Wins!")}        // ELSE print "Computer Wins"
}
chooseWinner();