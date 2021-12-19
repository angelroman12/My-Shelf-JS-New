import { ui } from "./ui.js";
import { http } from "./http.js";
import { uiFil } from "./uiFilter.js";

let output = document.getElementById("output");
document.addEventListener("DOMContentLoaded", getProducts);

function getProducts() {
  output.innerHTML = "";
  http
    .get("https://6086e5aea3b9c200173b7295.mockapi.io/products")
    .then((data) => ui.getProductsIndex(data));
}

const search = document
  .getElementById("search")
  .addEventListener("change", () => {
    output.innerHTML = "";
    http
      .get("https://6086e5aea3b9c200173b7295.mockapi.io/products")
      .then((data) => uiFil.searchBar(data));
  });

const all = document
  .getElementById("all")
  .addEventListener("click", getProducts);

const btn20 = document.getElementById("20").addEventListener("click", () => {
  output.innerHTML = "";
  http
    .get("https://6086e5aea3b9c200173b7295.mockapi.io/products")
    .then((data) => uiFil.lessThan20(data));
});

const btn30 = document.getElementById("30").addEventListener("click", () => {
  output.innerHTML = "";
  http
    .get("https://6086e5aea3b9c200173b7295.mockapi.io/products")
    .then((data) => uiFil.lessThan30(data));
});

const btn40 = document.getElementById("40").addEventListener("click", () => {
  output.innerHTML = "";
  http
    .get("https://6086e5aea3b9c200173b7295.mockapi.io/products")
    .then((data) => uiFil.lessThan40(data));
});

const btn50 = document.getElementById("50").addEventListener("click", () => {
  output.innerHTML = "";
  http
    .get("https://6086e5aea3b9c200173b7295.mockapi.io/products")
    .then((data) => uiFil.lessThan50(data));
});

const btn60 = document.getElementById("60").addEventListener("click", () => {
  output.innerHTML = "";
  http
    .get("https://6086e5aea3b9c200173b7295.mockapi.io/products")
    .then((data) => uiFil.lessThan60(data));
});
