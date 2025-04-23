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
    console.log(choiceNumber);
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

console.log(computerChoice());