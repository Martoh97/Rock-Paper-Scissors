function getComputerChoice() {
    const randomNum = Math.random();
    if (randomNum < 1 / 3) {
      return "rock";
    } else if (randomNum < 2 / 3) {
      return "paper";
    } else {
      return "scissors";
    }
  }
  
  function getHumanChoice() {
    let input;
    while (true) {
      input = prompt("Enter rock, paper, or scissors:");
      if (!input) {
        alert("You cancelled or left it blank. Game aborted.");
        throw new Error("User cancelled or input is empty");
      }
  
      input = input.toLowerCase();
  
      if (["rock", "paper", "scissors"].includes(input)) {
        return input;
      } else {
        alert("Invalid choice. Please enter rock, paper, or scissors.");
      }
    }
  }
  
  
  
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log(`It's a draw! Both chose ${humanChoice}`);
      return "draw";
    }
  
    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log(`You win this round! ${humanChoice} beats ${computerChoice}`);
      return "human";
    } else {
      console.log(`Computer wins this round! ${computerChoice} beats ${humanChoice}`);
      return "computer";
    }
  }
  
  function playGame() {
    let humanScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < 5; i++) {
      const humanChoice = getHumanChoice();
      const computerChoice = getComputerChoice();
      const result = playRound(humanChoice, computerChoice);
  
      if (result === "human") {
        humanScore++;
      } else if (result === "computer") {
        computerScore++;
      }
  
      console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);
    }
  
    if (humanScore > computerScore) {
      console.log("🏆 You win the game!");
    } else if (computerScore > humanScore) {
      console.log("💻 Computer wins the game!");
    } else {
      console.log("🤝 The game is a draw!");
    }
  }
  
  // Start the game
  playGame();
  