const readline = require("readline");

function rockpaperScissorsGame() {
  const choices = ["rock", "paper", "scissors"];
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log("Welcome to Rock, Paper, Scissors!");
  console.log(
    "Type 'rock', 'paper', or 'scissors' to play. Type 'exit' to quit."
  );

  const playRound = () => {
    rl.question("Your choice: ", (userInput) => {
      const userChoice = userInput.toLowerCase();

      if (userChoice === "exit") {
        console.log("Thanks for playing! Goodbye!");
        rl.close();
        return;
      }

      if (!choices.includes(userChoice)) {
        console.log(
          "Invalid choice! Please type 'rock', 'paper', or 'scissors'."
        );
        playRound();
        return;
      }

      const computerChoice =
        choices[Math.floor(Math.random() * choices.length)];
        console.log(`Computer chose: ${computerChoice}`);

      if (userChoice === computerChoice) {
        console.log("It's a tie!");
      } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
      ) {
        console.log("You win!");
      } else {
        console.log("you lose!");
      }

      console.log();
      playRound();
    });
  };
  playRound();
}

rockpaperScissorsGame();
