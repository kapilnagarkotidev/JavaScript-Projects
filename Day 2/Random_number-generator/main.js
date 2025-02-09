let number = document.querySelector(".number");
const generate = document.querySelector(".generate");

let randomNumber = () => {
  return Math.floor(Math.random() * 10000000 + 1);
};

generate.addEventListener("click", () => {
  number.textContent = randomNumber();
});
generate.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    number.textContent = randomNumber();
  }
});
