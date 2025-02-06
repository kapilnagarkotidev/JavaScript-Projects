let increment = document.querySelector("#increment");
let decrement = document.querySelector("#decrement");
let digit = document.querySelector(".digit");

increment.addEventListener("click", () => {
  digit.textContent = parseInt(digit.textContent) + 1;
});

decrement.addEventListener("click", () => {
  digit.textContent = parseInt(digit.textContent) - 1;
});

if (digit <= 0) {
  decrement.removeEventListener("click", () => {
    digit.textContent = parseInt(digit.textContent) - 1;
  });
}
