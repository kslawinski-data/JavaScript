const book = {
	title: "Drakula",
	author:	"Bram Stoker",
	numberofpages:	523,
	species: "Gothic fiction"
}

function displayObject(obj) {
  console.log("Object content:");
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`${key}: ${obj[key]}`);
    }
  }
}

displayObject(book);

/*
This code defines a JavaScript object and displays its content using a function. It is executed with Node.js.
*/