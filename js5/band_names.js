const bands = ["Pink Floyd", "Queen", "The Rolling Stones", "Nirvana", "The Beatles"];

    const resultElement = document.getElementById("result");

    if (bands.includes("The Beatles")) {
      resultElement.textContent = "The Beatles are on the list!";
    } else {
      resultElement.textContent = "The Beatles are not on the list.";
    }