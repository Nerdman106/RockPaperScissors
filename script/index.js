let global = {
    playerScore: 0,
    computerScore: 0
}

const setup = () => {


    let rounds = 0;

    for(let i = 0; i < 5; i++){
        playRound(getComputerChoice(), getHumanChoice())
        console.log("Score is: player: " + global.playerScore + ", computer: " + global.computerScore)
    }

    if(global.playerScore == global.computerScore){
        console.log("It is a draw!")
    } else if(global.playerScore > global.computerScore){
        console.log("Congratulations! You have won!")
    } else {
        console.log("Computers are superior today. Better luck next time.")
    }
}

const getComputerChoice = () => {
    let choices = ["rock", "paper", "scissors"]

    let randomNumer = Math.floor(Math.random() * 3);
    return choices[randomNumer]
}

const getHumanChoice = () => {
    let choices = ["rock", "paper", "scissors"]
    let humanChoice = prompt("1 = Rock, 2 = paper or 3 = scissors")
    let found = false
    while(!found){
        if (parseInt(humanChoice) == 1 || parseInt(humanChoice) == 2 || parseInt(humanChoice) == 3){
            found = true;
        } else {
            humanChoice = prompt("1 = Rock, 2 = paper or 3 = scissors")
        }
        
    }
    return choices[humanChoice-1]
}

const playRound = (computerChoice, humanChoice) => {
    if(computerChoice == humanChoice){
        console.log("Draw! No points!");
    } else if (computerChoice == "rock" && humanChoice == "paper"){
        global.playerScore++;
        console.log("You Win! Paper beats Rock!")
    } else if (computerChoice == "rock" && humanChoice == "scissors"){
        global.computerScore++;
        console.log("You Lose! Rock beats Scissors!")
    } else if (computerChoice == "paper" && humanChoice == "rock"){
        global.computerScore++;
        console.log("You Lose! Paper beats Rock!")
    } else if (computerChoice == "paper" && humanChoice == "scissors"){
        global.playerScore++;
        console.log("You Win! Scissors beats Paper!")
    } else if (computerChoice == "scissors" && humanChoice == "rock"){
        global.playerScore++;
        console.log("You Win! Rock beats Scissors!")
    } else if (computerChoice == "scissors" && humanChoice == "paper"){
        console.log("You Lose! Scissors beats Paper!")
        global.computerScore++;
    }
}

window.addEventListener("load", setup)