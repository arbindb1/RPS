//Global variables 
let humanScore = 0;
let computerScore = 0;

function humanChoice(){
    let choice="";
    while(1){
        choice = prompt("Enter your choice (rock/paper/scissors):");
        choice = choice.toLocaleLowerCase();
        if(choice == "rock" || choice == "paper" || choice == "scissors"){
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

function playRound(humanChoice,computerChoice){
    if(humanChoice == computerChoice){
        console.log("You tied!");
    }
    else if((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "paper")){
        console.log("You won the round!");
        humanScore++;
    }
    else{
        console.log("You lost this round!");
        computerScore++;
    }
}
