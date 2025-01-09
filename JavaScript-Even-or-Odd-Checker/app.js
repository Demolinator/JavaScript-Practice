const readline = require("readline");

function evenOrOddChecker() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    console.log("Welcome to the Even or Odd Checker!");

    rl.question("Enter a number: ", (userInput) => {
        const number = parseInt(userInput);

        if (isNaN(number)) {
            console.log("That's not a valid number!");
        } else if (number % 2 === 0) {
            console.log(`${number} is even!`);
        } else {
            console.log(`${number} is odd!`)
        }

        rl.close();
    })
}   

evenOrOddChecker();