// main.js

const readline = require("readline");
const { addPerson, showPeople } = require("./functions");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function showMenu() {
  console.log("\n--- MENU ---");
  console.log("1. Add person");
  console.log("2. Show all people");
  console.log("0. Exit");

  rl.question("Choose an option: ", (choice) => {
    switch (choice.trim()) {
      case "1":
        addPerson(rl, showMenu);
        break;
      case "2":
        showPeople(showMenu);
        break;
      case "0":
        console.log("Exiting program...");
        rl.close();
        break;
      default:
        console.log("Invalid choice. Try again.");
        showMenu();
    }
  });
}

showMenu();
