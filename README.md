# RockPaperScissors
---------------------
Create a game of "Rock Paper Scissors" with a basic Ui!

This game prompts the user to pick a button for one of 'rock, paper, and scissors'
then compares the entry to a random choice by the computer and writes 
a message to the console about who won the round. It also records a point for the
winner (or tie)
It logs the score until user or computer scores 5 points and announces the winner.
Then deactivates the user selection buttons, and creates a 'play again' button, which refreshes the page from cache.

## Changes Needed for UI
----------------------
REMOVE 5 rounds logic
3 buttons - for rock paper scissors
call playround with an event listener

Display results w a <div>
change all console.log() to DOM methods

Display running score
Announce winner once at 5 pts.
~~~~~~~
create container for btns
    Create div for instructions
    create rock btn (& details)
    create paper btn
    create scissors btn
append buttons & instructiosn to container

create contaner for results
    create running total div
    create winner annoucement div
append divs to container





## Original Planning:
----------------------
Assignment Breakdown:
Steps: 
-----setup-----
create rockPaperScissors.js
create index.html, add boilerplate & script tag to external javascript file.
Test html to js linked correctly w console.log
*for this portion* the html file is complete
-----as a single round------
- algo for computer "choice"
- algo for collecting user input
- algo for rock/paper/scissors win decision
- algo for win recording
- algo for win display
- algo for resetting game
-----update for multiple rounds------
- algo for total win count
- algo for num rounds decision (5)
- algo for overall winner
----------------------
PSEUDOCODE (ish/rough)
----------------------
Computer Choice
----

CREATE a function randomInteger to:
    COMPUTE randomInteger between 'a' and 'b' (where a is the lowest possible number, and b the highest; inclusive)
        COMPUTE randomNumber (will be 0-1)
        CALULATE multiply randomNumber by 'b' then add 'a'
        CALCULATE floor of number
        OUTPUT calculated number 

GET randomInteger(btwn 1 & 3)
    CREATE variable computerChoice
    IF randomInteger is 1 THEN SET computerChoice to 'rock'
    IF randomInteger is 2 THEN SET computerChoice to 'paper'
    IF randomInteger is 3 THEN SET computerChoice to 'scissors'
    ELSE LOG error "variable randomNumber out of bounds"

Get Human Choice
----
CREATE a function userResponce to collect user response to a question
    PRINT Choose rock, paper, or scissors
    GET user responce (typed)
    CONVERT user string to lower case
    CLEAN user string of whitespace and punctuation
    SET variable userResponse with cleaned response    
    
    CHECK user string matches options
    IF NOT one of rock paper or scissors
    THEN LOG error "user response is not rock paper or scissors, auto loss :("
        (final game will involve an interface with buttons to choose so no need to check string is accurate..... but then caps/not doesnt matter after all... eh. whatev. its the assignment.)
    
Rock/Paper/Scissors win, recordin, and display logic
----
CREATE Function gameWinnerLogic
CREATE variables userWins and computerWins and ties
IF userResponce == computerChoice
THEN variable ties add 1, 
    variable message is "You tie"
ELSE IF userResponce is rock AND computerChoice is scissors 
    OR userResponce is paper AND computerChoice is rock
    OR userResponce is scissors AND computerChoice is paper
THEN variable userWins add 1, 
    variable message is "You win!"
ELSE variable computerWins add 1, 
    variable message is "You loose"
ENDIF

LOG variable message to the console

reset game
----
CREATE function reset
    SET variables userWins computerWins and ties to 0
    SET variable message to "lets play again"

----------------------
these are all the parts, but something is wonky w/ stringing them together
    might just be b/c its not supposed to reset until 5 loops, but as I know single rounds arent the goal, its not really worth spending time puzzling it out.