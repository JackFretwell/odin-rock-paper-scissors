let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let rndInt = Math.floor(Math.random() * 3) + 1;
    switch(rndInt){
        case 1:
            return "rock";
        case 2:
            return "paper";    
        case 3:
            return "scissors";
    }
}

function getHumanChoice(){
    let choice = prompt("Please enter your choice, rock, paper or scissors:");
    switch(choice){
        case "rock":
            return "rock";
        case "paper":
            return "paper";
        case "scissors":
            return "scissors";
        default:
            return "Incorrect choice";
    }
}



