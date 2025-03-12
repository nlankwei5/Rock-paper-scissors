
let humanScore = 0;
let computerScore = 0;

function computerChoice(){
    random = Math.floor(Math.random()*3)
    if (random == 0) {
        return "Rock"
    }else if (random == 1){
        return "Paper"
    }else {
        return "Scissors"
    }
}

let choice = (humanChoice) => {return prompt("Rock, Paper, Scissors: ") }

console.log(choice())