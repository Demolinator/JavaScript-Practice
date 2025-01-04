const arr = [
  "Hello User!",
  "How are you?",
  "What help do you need!",
  "I am an assistant",
  "Here to assist you for all your needs.",
];

function delay (ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function looping() {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    await delay(1000);
  }

  console.log("Thinking... Processing your thoughts...");
  await delay(10000);

  console.log("Analyzing and Improving the response...");
  await delay(5000);

  console.log("Almost complete...");
  await delay(5000);

  console.log("Finalizing...");
  await delay(5000);

  console.log("Verifying user input...");
  await delay(5000);

  console.log("Interpreting your request...");
  await delay(5000);

  console.log("Processing complete!");
  await delay(3000);

  console.log("Sorry, I can't help you with that. You're cussing me!");
}

looping();
