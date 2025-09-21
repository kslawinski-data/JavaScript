const numbers = [42, 7, 19, 88, 3, 56, 12, 99, 23, 1];

const minNumber = Math.min(...numbers);
const maxNumber = Math.max(...numbers);

document.getElementById("min").textContent = "Minimum number: " + minNumber;
document.getElementById("max").textContent = "Maximum number: " + maxNumber;