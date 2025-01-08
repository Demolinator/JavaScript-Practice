const readline = require("readline");

function guessNumberGame () {
    const targetNumber = Math.ceil(Math.random() * 100);
    let attempts = 0;
    let guess;

    console.log("Welcome to the Number Guessing Game!");
    console.log("I have picked a number between 1 and 100. Can you guess it?");

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    const askQuestion = () => {
        rl.question("Enter your guess: ", (input) => {
            const guess = parseInt(input, 10);
            attempts++;

            if (isNaN(guess)) {
                console.log("That's not a valid number. Try again!");
            } else if (guess < targetNumber) {
                console.log("Too low! Try again.");
            } else if (guess > targetNumber) {
                console.log("Too high! Try again.");
            } else {
                console.log(`Congratulations! You guessed it right in ${attempts} attempts.`);
                rl.close();
                return;
            }
            askQuestion();
        })
    }
    askQuestion();
}

guessNumberGame();