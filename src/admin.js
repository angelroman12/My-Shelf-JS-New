import { ui } from "./ui.js";
import { http } from "./http.js";
const adminOutput = document.getElementById("outputAdmin");
addEventListener("DOMContentLoaded", getProducts);

function getProducts() {
  http
    .get("https://6086e5aea3b9c200173b7295.mockapi.io/products")
    .then((data) => ui.getProductsAdmin(data));
}

//  Adauga produs nou
const adauga = document.getElementById("adauga");
adauga.addEventListener("click", addNewProduct);

function addNewProduct(e) {
  e.preventDefault();
  adminOutput.innerHTML = "";
  const autor = document.getElementById("autor").value;
  const titlu = document.getElementById("titlu").value;
  const pages = document.getElementById("pages").value;
  const pret = document.getElementById("pret").value;
  const curency = document.getElementById("curency").value;
  const descriere = document.getElementById("descriere").value;

  const newProduct = {
    author: autor,
    title: titlu,
    pages: pages,
    price: pret,
    curency: curency,
    details: descriere,
  };
  http
    .post("https://6086e5aea3b9c200173b7295.mockapi.io/products", newProduct)
    .then((data) => getProducts());
}

//  Delete Product
document.getElementById("outputAdmin").addEventListener("click", deleteProduct);

function deleteProduct(e) {
  if (e.target.classList.contains("delete")) {
    const id = e.target.id;
    http
      .delete(`https://6086e5aea3b9c200173b7295.mockapi.io/products/${id}`)
      .catch("Error on delete!");
  }
}
//  Toggle Form
const adminForm = document.getElementById("adminForm");
const hideForm = document.getElementById("hideForm");
const showForm = document.getElementById("showForm");

hideForm.addEventListener("click", () => {
  adminForm.style.display = "none";
  hideForm.style.display = "none";
  showForm.style.display = "flex";
});

showForm.addEventListener("click", () => {
  adminForm.style.display = "flex";
  hideForm.style.display = "flex";
  showForm.style.display = "none";
});
