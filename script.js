function randomGenerator(max){
return Math.floor(Math.random() * max);

}

let randomChoice = randomGenerator(3);


function getComputerChoice(){

    if (randomChoice === 0) {
        return "Rock";
    } else if (randomChoice === 1) {
        return "Paper";
    } else {
        return "Scissor";
    }

}

let humanScore = 0;
let computerScore = 0;
let round = 0;
const maxrounds = 5;

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

let roundStatus = document.querySelector(".round-status");
let statusBar = document.querySelector(".status-bar");

let scissorKey = document.querySelector("#scissor");
scissorKey.addEventListener("click", () => {
    if ( round === 5) {
        return;
    } else {
    round++;
    roundStatus.textContent = ` Time to Play! Round ${round} `; 
    humanChoice = "Scissor";
    playGame(humanChoice);
}
    
});

let rockKey = document.querySelector("#rock");
rockKey.addEventListener("click", () => {
    if ( round === 5) {
        return;
    } else {
    round++;
    roundStatus.textContent = ` Time to Play! Round ${round} `; 
    humanChoice ="Rock";
    playGame(humanChoice);
    }
  
});

let paperKey = document.querySelector("#paper");
paperKey.addEventListener("click", () => {
    if ( round === 5) {
        return;
    } else {
    round++;
    roundStatus.textContent = ` Time to Play! Round ${round} `; 
    humanChoice = "Paper";
    playGame(humanChoice);
}
   
})

function playGame(humanChoice) {
    if ( round <= maxrounds) {
    let computerChoice = getComputerChoice();
    statusBar.textContent = playRound(computerChoice,humanChoice);

if ( round === maxrounds && humanScore < computerScore) {
statusBar.textContent = "After 5 rounds Computer Wins! Pildi man ka Jo!";
return;

} else if (round === maxrounds && humanScore > computerScore) {
    statusBar.textContent= "After 5 rounds You Win! Wow Nice Baby!";
    return;
}
}
}

