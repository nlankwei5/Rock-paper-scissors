let humanScore = 0;
let computerScore = 0;







function playGame(){
    //console.log("------------- Welcome! Play Rock, Paper, Scissors! --------------")
   
    let counter = 0;
    while (counter < 5){
        const computerSelection = getComputerChoice()
        const humanSelection = getHumanChoice()
        playRound(computerSelection, humanSelection)
        counter ++ ;
    }
    if (computerScore > humanScore){
        console.log("You lose!")
    }else if (computerScore < humanScore){
        console.log("You win!")
    }else {
        console.log("Draw")
    } 
    
}



function playRound(computerChoice, humanChoice){
    if (computerChoice.toLowerCase() === "rock" && humanChoice.toLowerCase() === "paper"){
        console.log("Computer chooses: ", computerChoice)
        console.log("Paper beats Rock")
        humanScore += 1;
        return
    }else if (computerChoice.toLowerCase() === "scissors" && humanChoice.toLowerCase() === "paper"){
        console.log("Computer chooses: ", computerChoice)
        console.log("Scissors beats Paper")
        computerScore += 1;
        return
   }else if (computerChoice.toLowerCase() === "paper" && humanChoice.toLowerCase() === "scissors"){
        console.log("Computer chooses: ", computerChoice)
        console.log("Scissors beats Paper")
        humanScore += 1;
        return
   }else if (computerChoice.toLowerCase() === "paper" && humanChoice.toLowerCase() === "rock"){
        console.log("Computer chooses: ", computerChoice)
        console.log("Paper beats Rock")
        computerScore += 1;
        return
    }else if (computerChoice.toLowerCase() === "scissors" && humanChoice.toLowerCase() === "rock"){
        console.log("Computer chooses: ", computerChoice)
        console.log(" Rock beats scissors")
        humanScore += 1;
        return
    }
    else {
        console.log("Computer chooses: ", computerChoice)
        console.log("Draw! Replay")
    }
}


function getComputerChoice(){
    random = Math.floor(Math.random()*3)
    if (random === 0) {
        return "Rock"
    }else if (random === 1){
        return "Paper"
    }else {
        return "Scissors"
    }
}

function getHumanChoice(choice){
    return prompt("Rock, Paper, Scissors: ")
}


playGame()


