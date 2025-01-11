const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const tasks = [];

function displayMenu() {
    console.log("\nTo-Do List Manager:");
    console.log("1. Add Task");
    console.log("2. View Tasks");
    console.log("3. Mark Task as Completed");
    console.log("4. Edit Task");
    console.log("5. Delete Task");
    console.log("6. Exit\n");
}

function handleinput(option) {
  switch (option) {
    case "1":
      rl.question("Enter task description: ", (task) => {
        tasks.push({ description: task, completed: false });
        console.log(`Task added: "${task}"`);
        mainMenu();
      });
      break;

    case "2":
      console.log("\nYour Tasks:");
      if (tasks.length === 0) {
        console.log("No tasks found!");
      } else {
        tasks.forEach((task, index) => {
            const status = task.completed ? "[✔]" : "[ ]";
            console.log(`${index + 1}. ${status} ${task.description}`);
        });
      }
      mainMenu();
      break;

    case "3":
        rl.question("Enter task number to mark as completed: ", (number) => {
            const index = parseInt(number) - 1;
            if (tasks[index]) {
                tasks[index].completed = true;
                console.log(`Task ${number} mark as completed!`);
            } else {
                console.log("Invalid task number");
            }
            mainMenu();
        });
        break;

    case "4":
        rl.question("Enter task number to edit: ", (number) => {
            const index = parseInt(number) - 1;
            if (tasks[index]) {
                rl.question("Enter the description: ", (newDescription) => {
                    tasks[index].description = newDescription;
                    console.log(`Task ${number} updated to: "${newDescription}"`);
                    mainMenu();
                });
            } else {
                console.log("Invalid task number!");
                mainMenu();
            }
        });
        break;
    
    case "5":
        rl.question("Enter task number to delete: ", (number) => {
            const index = parseInt(number) - 1;
            if (tasks[index]) {
                const removed = tasks.splice(index, 1);
                console.log(`Task "${removed[0].description}" deleted!`);
            } else {
                console.log("Invalid task number!");
            }
            mainMenu();
        });
        break;

    case "6":
        console.log("Goodbye!");
        rl.close();
        break;

    default:
        console.log("Invalid option! Please choose a number between 1 and 5.");
        mainMenu();
  }
}

function mainMenu () {
    displayMenu();
    rl.question("Chose an option: ", handleinput)
}

mainMenu()
