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
    let choice = (prompt("Please enter your choice, rock, paper or scissors:")).toLowerCase();
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



function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if(humanScore > computerScore){
        console.log("Congratulations! You've won!");
    }
    else if(computerScore > humanScore){
        console.log("You've lost! Better luck next time");
    }
    else{
        console.log("It's a draw!");
    }

    function playRound(humanChoice, computerChoice) {
        console.log(humanChoice);
        if(humanChoice == computerChoice){
            console.log("You drew!");
        }
        else if(humanChoice == "rock" && computerChoice == "paper"){
            console.log("You lose! Paper beats Rock");
            computerScore++;
        }
        else if(humanChoice == "rock" && computerChoice == "scissors"){
            console.log("You win! Rock beats Paper");
            humanScore++;
        }
        else if(humanChoice == "paper" && computerChoice == "scissors"){
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
        else if(humanChoice == "scissors" && computerChoice == "paper"){
            console.log("You win! Scissors beats Paper");
            humanScore++;
        }
        else{
            console.log("You chose an incorrect option. Your opponent gains a point");
            computerScore++;
        }
    }

}


