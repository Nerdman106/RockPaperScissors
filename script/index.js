let global = {
    playerScore: 0,
    computerScore: 0
}

const setup = () => {
    let rock = document.getElementById("rock")
    let paper = document.getElementById("paper")
    let scissors = document.getElementById("scissors")

    rock.addEventListener("click", () => {playRound("rock")})
    paper.addEventListener("click", () => {playRound("paper")})
    scissors.addEventListener("click", () => {playRound("scissors")})
    updateScore()
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

const playRound = (humanChoice) => {
    let computerChoice = getComputerChoice();
    let resultDiv = document.getElementById("result")
    if(computerChoice == humanChoice){
        resultDiv.textContent = "Draw! No points!"
        console.log("Draw! No points!");
    } else if (computerChoice == "rock" && humanChoice == "paper"){
        global.playerScore++;
        resultDiv.textContent = "You Win! Paper beats Rock!"
        console.log("You Win! Paper beats Rock!")
    } else if (computerChoice == "rock" && humanChoice == "scissors"){
        global.computerScore++;
        resultDiv.textContent = "You Lose! Rock beats Scissors!"
        console.log("You Lose! Rock beats Scissors!")
    } else if (computerChoice == "paper" && humanChoice == "rock"){
        global.computerScore++;
        resultDiv.textContent = "You Lose! Paper beats Rock!"
        console.log("You Lose! Paper beats Rock!")
    } else if (computerChoice == "paper" && humanChoice == "scissors"){
        global.playerScore++;
        resultDiv.textContent = "You Win! Scissors beats Paper!"
        console.log("You Win! Scissors beats Paper!")
    } else if (computerChoice == "scissors" && humanChoice == "rock"){
        global.playerScore++;
        resultDiv.textContent = "You Win! Rock beats Scissors!"
        console.log("You Win! Rock beats Scissors!")
    } else if (computerChoice == "scissors" && humanChoice == "paper"){
        console.log("You Lose! Scissors beats Paper!")
        global.computerScore++;
        resultDiv.textContent = "You Lose! Scissors beats Paper!"
    }
    updateScore()
}

const updateScore = () => {
    if(global.playerScore >= 5){
        let scoreDiv = document.getElementById("score")
        scoreDiv.textContent = `The score is: player: ${global.playerScore}, computer: ${global.computerScore}`
        let resultDiv = document.getElementById("result")
        resultDiv.textContent = "Congratulations! You have won the game!"
        global.playerScore = 0;
        global.computerScore = 0;
    } else if(global.computerScore >= 5){
        let scoreDiv = document.getElementById("score")
        scoreDiv.textContent = `The score is: player: ${global.playerScore}, computer: ${global.computerScore}`
        let resultDiv = document.getElementById("result")
        resultDiv.textContent = "You have been defeated! Better luck next time!"
        global.playerScore = 0;
        global.computerScore = 0;
    } else {
        let scoreDiv = document.getElementById("score")
        scoreDiv.textContent = `The score is: player: ${global.playerScore}, computer: ${global.computerScore}`
    }
}

window.addEventListener("load", setup)