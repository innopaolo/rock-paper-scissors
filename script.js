function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let x = Math.random() * choices.length;
    return (choices[Math.floor(x)]);
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    
    let player = playerSelection.toLowerCase();
    

    if (player === "rock") {
        if (computerSelection === "rock") {
            console.log("It's a tie! You chose the same weapon.");
        } else if (computerSelection === "paper") {
            console.log("You lose! Paper beats rock.");
            computerScore += 1;
        } else if (computerSelection === "scissors") {
            console.log("You win! Rock beats scissors.");
            playerScore += 1;
        }
    } else if (player === "paper") {
        if (computerSelection === "rock") {
            console.log("You win! Paper beats rock.");
            playerScore += 1;
        } else if (computerSelection === "paper") {
            console.log("It's a tie! You chose the same weapon.");
        } else if (computerSelection === "scissors") {
            console.log("You lose! Scissors beat paper.");
            computerScore += 1;
        }
    } else if (player === "scissors") {
        if (computerSelection === "rock") {
            console.log("You lose! Rock beats scissors.");
            computerScore += 1;
        } else if (computerSelection === "paper") {
            console.log("You win! Scissors beat paper.");
            playerScore += 1;
        } else if (computerSelection === "scissors") {
            console.log("It's a tie! You chose the same weapon.");
        }
    } else {
        console.log("Either you misspelled it or not a valid weapon! Try again.");
    }               
} 

let counter = 5;


function game() {
    for (let i = 0; i < counter; i++) {  
        let playerSelection = String(prompt("Choose a weapon:"));

        if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors"){
            i = i - 1;
        }

        let computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection));
    }

    console.log(`Player: ${playerScore}`);
    console.log(`Computer: ${computerScore}`);

    if (playerScore > computerScore) {
        console.log("Congratulations! You won the war.");
    } else if (playerScore < computerScore) {
        console.log("I'm sorry, you suck!!!");
    } else {
        console.log("It's a mexican standoff.");
    }

}

game();


