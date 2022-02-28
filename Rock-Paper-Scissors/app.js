const choices = document.querySelectorAll("button");
const playerPoints = document.getElementById("playerScore");
const computerPoints = document.getElementById("computerScore");

let playerScore = 0;
let computerScore = 0;
const computerChoice = ["Rock", "Paper", "Scissors"];

playerPoints.innerHTML = playerScore;
computerPoints.innerHTML = computerScore;
result.innerHTML = "Make your choice!";

function disableChoices() {
  choices.forEach((choice) => {
    choice.disabled = true;
  });
}

function computerPlay() {
  return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

function playRound(playerSelection) {
  computerSelection = computerPlay().toLowerCase();
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection == computerSelection) {
    result = "Tie!";
  } else if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "rock")
  ) {
    computerScore++;
    result = "Computer wins!";
  } else {
    playerScore++;
    result = "Player wins!";
  }

  if (playerScore == 5 || computerScore == 5) {
    disableChoices();
    document.getElementById("reset").innerHTML =
      "Refresh the page in order to play a new game!";
  }
  playerPoints.innerHTML = playerScore;
  computerPoints.innerHTML = computerScore;
  document.getElementById("result").innerHTML = result;
}

choices.forEach((choice) => {
  choice.addEventListener("click", function () {
    playRound(choice.value);
  });
});
