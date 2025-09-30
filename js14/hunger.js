// This program checks the current time
// If the hour is between 12 and 14, it shows "I am hungry"
// Otherwise, it shows "I am full"

// Get current date and time
const now = new Date();
const hour = now.getHours();

// Check the time
if (hour >= 12 && hour < 14) {
  console.log("I am hungry");
} else {
  console.log("I am full");
}
