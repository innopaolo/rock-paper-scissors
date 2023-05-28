function cycleImages(computerSelection) {
    let imageArray = ["rock.png", "paper.png", "scissors.png"];
    let imageIndex = 0;
    let imageElement = document.querySelector("#cycle");

    const cycle = setInterval (function() {
        imageIndex = (imageIndex + 1) % imageArray.length;
        imageElement.src = imageArray[imageIndex];
    }, 50);

    setTimeout(function() {
    clearInterval(cycle);
    imageElement.src = `${computerSelection}.png`;
    }, 3000);
}

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let x = Math.random() * choices.length;
    return (choices[Math.floor(x)]);
}

let playerScore = 0;
let computerScore = 0;
let counter = 0;
let isGameOver = false;
let rounds = document.querySelector(".rounds");

function playRound(player, computerSelection) {

    let para = document.createElement("p");

    if (player === "rock") {
        if (computerSelection === "rock") {
            para.textContent = "It's a tie! Same weapons.";
        } else if (computerSelection === "paper") {
            para.textContent = "You lose! Paper beats rock.";
            computerScore += 1;
        } else if (computerSelection === "scissors") {
            para.textContent = "You win! Rock beats scissors.";
            playerScore += 1;
        }
    } else if (player === "paper") {
        if (computerSelection === "rock") {
            para.textContent = "You win! Paper beats rock.";
            playerScore += 1;
        } else if (computerSelection === "paper") {
            para.textContent = "It's a tie! Same weapons.";
        } else if (computerSelection === "scissors") {
            para.textContent = "You lose! Scissors beat paper.";
            computerScore += 1;
        }
    } else if (player === "scissors") {
        if (computerSelection === "rock") {
            para.textContent = "You lose! Rock beats scissors.";
            computerScore += 1;
        } else if (computerSelection === "paper") {
            para.textContent = "You win! Scissors beat paper.";
            playerScore += 1;
        } else if (computerSelection === "scissors") {
            para.textContent = "It's a tie! Same weapons.";
        }
    }

    setTimeout (function() {
        para.style.fontWeight = "bold";
        rounds.appendChild(para);

        if (counter === 2 && !isGameOver) {
            isGameOver = true;

            let result = document.createElement("p");
            result.style.backgroundColor = "#ff5853";
            result.style.padding = "10px";
            result.style.borderRadius = "8px";
            result.style.fontWeight = "bolder";

            if (playerScore > computerScore) {
                result.textContent = "Congratulations! You won the war.";
            } else if (playerScore < computerScore) {
                result.textContent = "I'm sorry, you suck!!!";
            } else {
                result.textContent = "It's a mexican standoff.";
            }

            rounds.appendChild(result);
        }

        counter++; // After the if statement to ensure ifBlock prints after third round
    }, 3000);
}

let isCooldown = false;

const weapons = Array.from(document.querySelectorAll(".weapons div"));
weapons.forEach((weapon) => weapon.addEventListener("click", function() {
    if (counter < 3) {
        if (isCooldown) return;
        isCooldown = true;

        let playerSelection = weapon.classList.value;
        let computerSelection = getComputerChoice();

        cycleImages(computerSelection);

        setTimeout (() => {
            isCooldown = false;
        }, 3000);

        playRound(playerSelection, computerSelection);
    };
}));