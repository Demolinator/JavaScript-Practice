const arr = [
  "Hello User!",
  "How are you?",
  "What help do you need!",
  "I am an assistant",
  "Here to assist you for all your needs.",
];

function looping() {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    setTimeout(() => looping(i + 1), 1000);
  }
}

looping();
