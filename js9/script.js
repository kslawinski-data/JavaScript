const animal = {
	species: "dog",
	name: "cloud",
	age: 3,
	sound: "woof woof"
}

function displayAnimal(obj) {
  console.log("Animal content:");
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`${key}: ${obj[key]}`);
    }
  }
}

function displaySound(obj) {
	console.log("Sound of animal:");
	console.log(animal['sound']);
}

displayAnimal(animal);
displaySound(animal);
/* 
This script creates an animal object, displays its properties,
 and then shows the sound the animal makes using a function.
*/
