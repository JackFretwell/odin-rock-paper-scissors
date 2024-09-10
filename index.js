function getComputerChoice(){
    const rndInt = Math.floor(Math.random() * 3) + 1;
    switch(rndInt){
        case 1:
            return "rock";
        case 2:
            return "paper";    
        case 3:
            return "scissors";
    }
}





