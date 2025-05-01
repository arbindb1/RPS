## Description
This Rock, Paper, Scissors game is a five-round match between a human player and the computer. In each round, the human is prompted to enter their choice—either "rock", "paper", or "scissors"—while the computer randomly selects its own using a number generator. The playRound() function compares both choices and determines the winner for that round, updating the human or computer score accordingly. After five rounds, the game evaluates the final scores and displays a message indicating whether the human won, lost, or if the game ended in a tie. This is the first version of the game, and it is designed to be played in the JavaScript console of a web browser.

Live preview: https://arbindb1.github.io/RPS/

## ROCK,PAPER,SCISSORS

### Main Pseudo Code:
    BEGIN GAME
        SET global variable humanScore TO 0
        SET global variable computerScore TO 0
        DEFINE playRound function
        SET round TO 1;
        WHILE round <= 5 
            SET humanChoice TO: 
                                CALL humanChoice();

            SET computerChoice TO: 
                                CALL computerChoice();
            CALL playRound(humanChoice,computerChoice)
            INCREMENT round BY 1
        END WHILE   

        IF humanScore > computerScore
            DISPLAY "You win the game!"
        ELSE IF humanScore < computerScore
            DISPLAY "You lose the game!"
        ELSE
            DISPLAY "It's a tie!"
        END IF
    END

### Sub problem 1: humanChoice() Pseudo Code:
    BEGIN
        DECLARE and SET variable choice TO empty string
        WHILE true
            PROMPT player to enter their choice.
            SET choice TO players choice.
            CONVERT choice to lower case
            IF choice  EQUALS Rock or Paper or Scissors
                BREAK
            ELSE
                ALERT "Invalid input! Please enter rock, paper, or scissors."
            END IF
        END WHILE
        RETURN choice
    END

### Sub problem 2: computerChoice() Pseudo Code:
    BEGIN 
        GENERATE random number FROM 1 TO 3
        SET choiceNumber TO random number generated
        IF choiceNumber = 1
            RETURN "rock"
        ELSE IF choiceNumber = 2
            RETURN "paper"
        ELSE
            RETURN "scissors"
        END IF
    END

### Sub problem 3: playRound(humanChoice,computerChoice) Pseudo Code:

    BEGIN
        IF humanChoice = computerChoice
            PRINT "You tied!"
        ELSE IF (humanChoice = "rock" && computerChoice = "scissor") OR (humanChoice = "paper" && computerChoice = "rock") OR (humanChoice = "scissors" && computerChoice ="rock")
            PRINT "You won the round!"
            INCREMENT humanScore BY 1
        ELSE 
            print "You lost the round"
            INCREMENT computerScore BY 1

    END


--------------------------------------------------------- Using DOM --------------------------------------------------------------------
### Main Pseudo code
    Create three buttons for rock,paper and scissors.
    Add event listeners to make button interactive



        

