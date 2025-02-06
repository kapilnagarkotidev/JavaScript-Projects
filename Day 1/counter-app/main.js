let increment = document.querySelector("#increment");
let decrement = document.querySelector("#decrement");
let digit = document.querySelector(".digit");

increment.addEventListener("click", () => {
  if (parseInt(digit.innerText) < 10) {
    digit.innerText++;
  }
  updateButtons();
});

decrement.addEventListener("click", () => {
  if (parseInt(digit.innerText) > 0) {
    digit.innerText--;
  }
  updateButtons();
});

function updateButtons() {
  if (parseInt(digit.innerText) <= 0) {
    decrement.disabled = true;
  } else {
    decrement.disabled = false;
  }

  if (parseInt(digit.innerText) >= 10) {
    increment.disabled = true;
  } else {
    increment.disabled = false;
  }
}

updateButtons();
