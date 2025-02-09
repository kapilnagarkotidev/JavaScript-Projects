const min = 1;
const max = 50;
let answer = Math.floor(Math.random() * 50 + 1);
let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = Number(prompt(`Guess the number between ${min} - ${max} : `));
  if (isNaN(guess)) {
    alert("Alphabets is not allowed. Enter a valid number");
  } else if (guess < 1) {
    if (guess === 0) {
      alert("0 is not allowed");
    } else {
      alert("Negative number is not allowed");
    }
  } else if (guess > 50) {
    alert("Numbers greater than 50 is not allowed.");
  } else {
    attempts++;
    if (guess > answer) {
      alert(`${guess} is too high. Try again`);
    } else if (guess < answer) {
      alert(`${guess} is too low. Try again.`);
    } else {
      alert(`Congratulation, ${guess} is correct..`);
      running = false;
    }
  }
}
