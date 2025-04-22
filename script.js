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