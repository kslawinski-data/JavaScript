//functions.js

const people = require('./person');

function addPerson(rl, callback) {
  const person = {};

  rl.question("Enter person's name: ", (name) => {
    person.name = name;

    rl.question("Enter person's last name: ", (lastname) => {
      person.lastname = lastname;

      rl.question("Enter person's age: ", (age) => {
        person.age = age;

        rl.question("Enter person's address: ", (address) => {
          person.address = address;

          rl.question("Do they like ice cream when it's over 20°C? (yes/no): ", (iceCreamAnswer) => {
            person.likesIceCreamAbove20 = iceCreamAnswer.toLowerCase() === "yes";

            rl.question("Do they like tea when it's under 20°C? (yes/no): ", (teaAnswer) => {
              person.likesTeaBelow20 = teaAnswer.toLowerCase() === "yes";

              people.push(person);
              console.log("\nPerson added successfully.");
              callback();
            });
          });
        });
      });
    });
  });
}

function showPeople(callback) {
  if (people.length === 0) {
    console.log("\nNo people added yet.");
  } else {
    console.log("\n--- People List ---");
    people.forEach((person, index) => {
      console.log(`\nPerson #${index + 1}`);
      console.log("Name:                  ", person.name);
      console.log("Last Name:             ", person.lastname);
      console.log("Age:                   ", person.age);
      console.log("Address:               ", person.address);
      console.log("Likes ice cream >20°C: ", person.likesIceCreamAbove20 ? "Yes" : "No");
      console.log("Likes tea <20°C:       ", person.likesTeaBelow20 ? "Yes" : "No");
    });
  }
  callback();
}

function showIceCreamLovers(callback) {
  const filtered = people.filter(p => p.likesIceCreamAbove20);

  if (filtered.length === 0) {
    console.log("\nNo one likes ice cream above 20°C.");
  } else {
    console.log("\n--- People Who Like Ice Cream (>20°C) ---");
    filtered.forEach((person, index) => {
      console.log(`\nPerson #${index + 1}`);
      console.log("Name:", person.name, person.lastname);
    });
  }

  callback();
}

function showTeaLovers(callback) {
  const filtered = people.filter(p => p.likesTeaBelow20);

  if (filtered.length === 0) {
    console.log("\nNo one likes tea below 20°C.");
  } else {
    console.log("\n--- People Who Like Tea (<20°C) ---");
    filtered.forEach((person, index) => {
      console.log(`\nPerson #${index + 1}`);
      console.log("Name:", person.name, person.lastname);
    });
  }

module.exports = {
  addPerson,
  showPeople,
  showIceCreamLovers,
  showTeaLovers
};
