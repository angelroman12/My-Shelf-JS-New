const red = document.getElementById("red");
const header = document.getElementById("header");
red.addEventListener("click", () => {
  header.style.backgroundColor = "#ff2442";
});

const blue = document.getElementById("blue").addEventListener("click", () => {
  header.style.backgroundColor = "#3db2ff";
});

const orange = document
  .getElementById("orange")
  .addEventListener("click", () => {
    header.style.backgroundColor = "#ffb830";
  });
