let background = document.querySelector(".background");
let colors = document.querySelectorAll(".color");

colors.forEach((color) => {
  color.addEventListener("click", () => {
    background.style.backgroundColor = color.style.backgroundColor;
  });
});
