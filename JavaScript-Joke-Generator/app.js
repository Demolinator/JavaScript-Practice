const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "I told my computer I needed a break, and now it won't stop sending me Kit-Kats.",
  "Why did the math book look sad? It had too many problems.",
  "What do you call fake spaghetti? An impasta!",
  "Why was the broom late? It swept in traffic!",
];

let lastJokeIndex = -1;

function delay (ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function tellJoke () {
    console.log("Thinking of a joke...");
    await delay(5000);

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * jokes.length);
    } while (randomIndex === lastJokeIndex);

    lastJokeIndex = randomIndex
    console.log(jokes[randomIndex]);
}

tellJoke();