let moveButtons = document.querySelectorAll('.playerSide button');
let humanScore = 0;
let computerScore = 0;

moveButtons.forEach(button => button.addEventListener('click',(e)=>{
    let humanChoice = e.currentTarget.dataset.move;
    let deviceChoice = computerChoice();

    console.log('humanChoice:'+humanChoice);
    console.log("computer choice:"+deviceChoice);
    playRound(humanChoice,deviceChoice);
}))

    function playRound(humanChoice,computerChoice){
        if(humanChoice == computerChoice){}
        else if((humanChoice == "Rock" && computerChoice == "Scissors") || (humanChoice == "Paper" && computerChoice == "Rock") || (humanChoice == "Scissors" && computerChoice == "Paper")){
            humanScore++;
        }
        else{
            computerScore++;
        }
        console.log("humanScore:"+humanScore);
        console.log("Computerscore:"+computerScore);
        if(humanScore == 5){
            postPlay("Play Again");
            document.querySelector('.output').textContent = "You won congratulation!";
        }
        else if(computerScore == 5){
            postPlay("Try Again");
            document.querySelector('.output').textContent = "You lost womp womp. Better luck next time.";
        }
        setScore(humanScore,computerScore)
    }

function setScore(){
        document.querySelector('.playerScore span').textContent = humanScore;
        document.querySelector('.computerScore span').textContent = computerScore;
}

function preplay(){
    let gameContent = document.querySelector('.game-content');
    let play = document.querySelector('.play-button');
    play.addEventListener('click',(e)=>{
        humanScore = 0;
        computerScore = 0;
        document.querySelector('.output').textContent = "";
        setScore();
        gameContent.classList.remove('disabled');
        gameContent.classList.add('enabled');
        play.classList.remove('visible');
        play.classList.add('invisible');
        play.textContent = "Play";
    });
}

function postPlay(playButtonText){
        let gameContent = document.querySelector('.game-content');
    let play = document.querySelector('.play-button');
        gameContent.classList.remove('enabled');
        gameContent.classList.add('disabled');
        play.classList.remove('invisible');
        play.classList.add('visible');
        play.textContent=playButtonText;
}

preplay();

function computerChoice(){
    let choiceNumber = Math.floor(1 + Math.random()*3);
    if(choiceNumber == 1){
        return "Rock";
    }
    else if(choiceNumber == 2){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}
// function playGame(){
//     //Global variables 

    

//     let round = 1;
//     while(round<=5){
//         alert("Round "+round);
//         const hChoice = humanChoice();
//         const cChoice = computerChoice();
//         playRound(hChoice,cChoice,round);
//         round++;
//     }
//     console.log("Your Score:"+ humanScore);
//     console.log("Computer Score:"+computerScore);
//     if(humanScore > computerScore){

//         console.log("Congratulations, You won!");
//     }
//     else if(humanScore < computerScore){
//         console.log("You lost! Try again next time.");
//     }
//     else{
//         console.log("Its a draw!");
//     }
// }

// playGame();
