const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const person = {
  name: "",
  lastname: "",
  age: "",
  address: ""
};

mainMenu();

function mainMenu() {
  console.log("\n--- MENU ---");
  console.log("1. Add person");
  console.log("2. Show person");
  console.log("3. Edit person address");
  console.log("0. Exit");

  rl.question("Choose an option: ", (choice) => {
    switch (choice.trim()) {
      case "1":
        addPerson();
        break;
      case "2":
        showPerson();
        break;
      case "3":
        editAddress();
        break;
      case "0":
        console.log("Exiting program...");
        rl.close();
        break;
      default:
        console.log("Invalid choice. Please try again.");
        mainMenu();
    }
  });
}

function addPerson() {
  rl.question("Enter person's name: ", (name) => {
    person.name = name;

    rl.question("Enter person's last name: ", (lastname) => {
      person.lastname = lastname;

      rl.question("Enter person's age: ", (age) => {
        person.age = age;

        rl.question("Enter person's address: ", (address) => {
          person.address = address;

          console.log("\nPerson added successfully.");
          mainMenu();
        });
      });
    });
  });
}

function showPerson() {
  console.log("\n--- Person Data ---");
  console.log("Name:      ", person.name || "Not set");
  console.log("Last Name: ", person.lastname || "Not set");
  console.log("Age:       ", person.age || "Not set");
  console.log("Address:   ", person.address || "Not set");
  mainMenu();
}

function editAddress() {
  rl.question("Enter new address: ", (address) => {
    person.address = address;
    console.log("Address updated.");
    mainMenu();
  });
}

