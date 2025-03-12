function playRound(computerChoice, humanChoice){
    if (computerChoice.toLowerCase() === "rock" && humanChoice.toLowerCase() === "paper"){
        console.log("You win! Paper beats Rock")
        humanScore += 1;
        return
    }else if (computerChoice.toLowerCase() === "scissors" && humanChoice.toLowerCase() === "paper"){
        console.log("You lose! Scissors beats Paper")
        computerScore += 1;
        return
   }else if (computerChoice.toLowerCase() === "paper" && humanChoice.toLowerCase() === "scissors"){
        console.log("You win! Scissors beats Paper")
        humanScore += 1;
        return
   }else if (computerChoice.toLowerCase() === "paper" && humanChoice.toLowerCase() === "rock"){
        console.log("You lose! Paper beats Rock")
        computerScore += 1;
        return
    }else {
        console.log("Draw! Replay")
    }
}


//playRound(computerSelection,humanSelection)

let humanScore = 0;
let computerScore = 0;

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

let getHumanChoice = (choice) => {return prompt("Rock, Paper, Scissors: ") }

const computerSelection = getComputerChoice()
const humanSelection = getHumanChoice()

console.log(playRound(computerSelection,humanSelection))
console.log("Your Score is:", humanScore)
console.log("Computer Score is:", computerScore)


