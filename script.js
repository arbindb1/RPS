//Global variables 
let humanScore = 0;
let computerScore = 0;

function humanChoice(){
    let choice="";
    while(1){
        choice = prompt("Enter your choice (rock/paper/scissors):");
        choice = choice.toLowerCase();
        if((choice == "rock" || choice == "paper" || choice == "scissors")){
            break;
        }
        else{
            alert("Only rock,paper,scissors values are allowed.");
        }
    }
    return choice;
}

function computerChoice(){
    let choiceNumber = Math.floor(1 + Math.random()*3);
    if(choiceNumber == 1){
        return "rock";
    }
    else if(choiceNumber == 2){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function playRound(humanChoice,computerChoice,round){
    if(humanChoice == computerChoice){
        console.log("You tied on round "+round+"!");
    }
    else if((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "paper")){
        console.log("You won the round "+ round + "!");
        humanScore++;
    }
    else{
        console.log("You lost the round "+ round + "!");
        computerScore++;
    }
}

function playGame(){

    let round = 1;
    while(round<=5){
        alert("Round "+round);
        const hChoice = humanChoice();
        const cChoice = computerChoice();
        playRound(hChoice,cChoice,round);
        round++;
    }
    console.log("Your Score:"+ humanScore);
    console.log("Computer Score:"+computerScore);
    if(humanScore > computerScore){

        console.log("Congratulations, You won!");
    }
    else if(humanScore < computerScore){
        console.log("You lost! Try again next time.");
    }
    else{
        console.log("Its a draw!");
    }
}

playGame();
