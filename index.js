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

function playRound(humanChoice, computerChoice) {
    const humansChoice = humanChoice.toLowerCase();
    if(humansChoice == computerChoice){
        console.log("You drew!");
    }
    else if(humansChoice == "rock" && computerChoice == "paper"){
        console.log("You lose! Paper beats Rock");
        computerScore++;
    }
    else if(humansChoice == "rock" && computerChoice == "scissors"){
        console.log("You win! Rock beats Paper");
        humanScore++;
    }
    else if(humansChoice == "paper" && computerChoice == "scissors"){
        console.log("You lose! Scissors beats Paper");
        computerScore++;
    }
    else if(humanChoice == "paper" && computerChoice == "rock"){
        console.log("You win! Paper beats Rock");
        humanScore++;
    }
    else if(humanChoice == "scissors" && computerChoice == "rock"){
        console.log("You lose! Rock beats Scissors");
        computerScore++;
    }
    else{
        console.log("You win! Scissors beats Rock");
        humanScore++;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
