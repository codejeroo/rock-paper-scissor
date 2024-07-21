
function randomGenerator(max){
return Math.floor(Math.random() * max);

}

let randomChoice = randomGenerator(3);


function getComputerChoice(){

    if (randomChoice === 0) {
        return "Rock";
    } else if (randomChoice === 1) {
        return "Paper"
    } else {
        return "Scissor"
    }

}

function getHumanChoice(){
    choice= prompt("Type R for Rock, S for Scissors and P for Paper");

    if ( choice === "R") {
        return "Rock"
    } else if (choice === "S") {
        return "Scissor" 
    } else if (choice === "P") {
        return "Paper"
    } else{
        prompt("Wrong Input! Try Again!")
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    if (humanChoice === "Paper" && computerChoice === "Rock") {
    ++humanScore;
   return "You Win! Paper beats Rock!"
} 
else if (humanChoice === "Rock" && computerChoice === "Paper") {
    ++computerScore;
   return "You Lose! Paper beats Rock!"
}
else if (humanChoice === "Rock" && computerChoice === "Scissor") {
    ++humanScore;
    return "You Win! Rock beats Scissor!"
}
else if (humanChoice === "Scissor" && computerChoice === "Rock")
{
    ++computerScore;
    return "You Lose! Rock beats Scissor!"
} else if (humanChoice === "Scissor" && computerChoice === "Paper") {
    ++humanScore;
    return "You Win! Scissor beats Paper!"
} else if(humanChoice === "Paper" && computerChoice === "Scissor") {
    ++computerScore;
    return "You Lose! Scissor beats Paper!"
} else if (humanChoice === computerChoice) {
    ++computerScore;
    ++humanScore;
    return "TIE!"
}
}

function playGame() {

for ( let i = 0 ; i < 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    console.log(`Time to Play! Round ${i+1}!`)
    console.log(playRound(humanChoice,computerChoice));
    console.log(`Scores: Computer: ${computerScore}, Human: ${humanScore}`);
}

if (computerScore > humanScore) {
    console.log("You Lost! Better Luck Next Time!")
} else if (computerScore < humanScore) {
    console.log("You Win! Congratulations!")
} else if (computerScore === humanScore) {
    console.log("It's a TIE!")
}

}

playGame();