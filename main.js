// Function to get computer's random choice
function getComputerChoice() {
  const randomNum = Math.random();
  if (randomNum < 1/3) {
    return "rock";
  } else if (randomNum < 2/3) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Initialize scores
let humanScore = 0;
let computerScore = 0;

// Create DOM elements for displaying results
const resultDiv = document.createElement('div');
resultDiv.classList.add('result');
document.body.appendChild(resultDiv);

const scoreDiv = document.createElement('div');
scoreDiv.classList.add('score');
document.body.appendChild(scoreDiv);

const winnerDiv = document.createElement('div');
winnerDiv.classList.add('winner');
document.body.appendChild(winnerDiv);

// Update the score display
function updateScore() {
  scoreDiv.textContent = `Score: Human ${humanScore} - Computer ${computerScore}`;
}

// Display round result
function displayResult(message) {
  resultDiv.textContent = message;
}

// Display winner when game ends
function displayWinner(message) {
  winnerDiv.textContent = message;
  // Disable buttons when game is over
  document.querySelectorAll('.btn').forEach(button => {
    button.disabled = true;
  });
}

// Play a single round
function playRound(playerSelection) {
  // Get computer's choice
  const computerSelection = getComputerChoice();
  
  // Compare choices and determine winner
  if (playerSelection === computerSelection) {
    displayResult(`It's a draw! Both chose ${playerSelection}`);
    return "draw";
  }
   
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    displayResult(`You win this round! ${playerSelection} beats ${computerSelection}`);
    return "human";
  } else {
    displayResult(`Computer wins this round! ${computerSelection} beats ${playerSelection}`);
    return "computer";
  }
}

// Handle button click
function handleButtonClick(event) {
  const playerSelection = event.target.dataset.choice;
  const result = playRound(playerSelection);
  
  // Update scores based on result
  if (result === "human") {
    humanScore++;
  } else if (result === "computer") {
    computerScore++;
  }
  
  // Update score display
  updateScore();
  
  // Check if the game is over (someone reaches 5 points)
  if (humanScore >= 5) {
    displayWinner("🏆 You win the game!");
  } else if (computerScore >= 5) {
    displayWinner("💻 Computer wins the game!");
  }
}

// Set up buttons with event listeners
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', handleButtonClick);
});

// Initialize score display
updateScore();