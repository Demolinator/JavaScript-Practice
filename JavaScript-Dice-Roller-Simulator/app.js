function rollDice () {
    console.log("Rolling the dice...");
    const result = Math.ceil(Math.random() * 6);
    console.log(`You rolled a ${result}!`)
}

rollDice();