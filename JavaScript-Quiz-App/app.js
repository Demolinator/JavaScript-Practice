const readline = require("readline");

function quizApp() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const questions = [
    {
      question: "What is the capital of France?",
      options: ["1. Paris", "2. Rome", "3. Berlin", "4. Madrid"],
      answer: 1,
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["1. Earth", "2. Mars", "3. Jupiter", "4. Saturn"],
      answer: 2,
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: [
        "1. Charles Dickens",
        "2. J.K. Rowling",
        "3. William Shakespeare",
        "4. Mark Twain",
      ],
      answer: 3,
    },
  ];

  let score = 0;
  let currentQuestion = 0;

  console.log("Welcome to the Quiz App!");
  console.log(
    "Answer the following questions by typing the number of your choice.\n"
  );

  const askQuestion = () => {
    if (currentQuestion >= questions.length) {
      console.log(
        `\nQuiz Over! Your final score is: ${score}/${questions.length}`
      );
      rl.close();
      return;
    }

    const question = questions[currentQuestion];
    console.log(`Q${currentQuestion + 1}: ${question.question}`);

    question.options.forEach((options) => console.log(options));

    rl.question("Your answer: ", (userInput) => {
        const userAnswer = parseInt(userInput);

        if (userAnswer === question.answer) {
            console.log("Correct!\n");
            score++;
        } else {
            console.log("Wrong! The correct answer was:", question.options[question.answer -1], "\n");
        }

        currentQuestion++;
        askQuestion();
    })
  };
  askQuestion();
}

quizApp();