const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Please enter a number: ", (input) => {
  const number = Number(input);

  if (isNaN(number)) {
    console.log("This is not a valid number.");
  } else {
    if (number % 2 === 0) {
      console.log(`The number ${number} is even.`);
    } else {
      console.log(`The number ${number} is odd.`);
    }
  }

  rl.close();
});

//This program takes a number from the user and checks whether it is even or odd.
