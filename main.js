let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".menu");
let cartNum = document.querySelector(".cart-num");
let addCart = document.querySelectorAll(".add");
let carts = document.querySelector(".carts");
let cart = document.querySelector(".cart");
let productNames = document.querySelectorAll(".name");
let texts = document.querySelectorAll(".card-text");
let imgs = document.querySelectorAll(".card-img-top");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});

let cartArray = [];

cart.addEventListener("click", () => {
  carts.classList.toggle("active");
});

for (let i = 0; i < addCart.length; i++) {
  addCart[i].addEventListener("click", function () {
    getItem();
    console.log({
      productName: productNames[i].innerHTML,
      text: texts[i].innerHTML,
    });
    cartArray.push({
      productName: productNames[i].innerHTML,
      text: texts[i].innerHTML,
      image: imgs[i].src,
    });
    addToDocument(cartArray);
    localStorage.setItem("cart", JSON.stringify(cartArray));
    getItem()
  });
}

function deleteProduct(index) {
  getItem();
  console.log(cartArray, index);
  cartArray.splice(index, 1);
  addToDocument(cartArray);
  localStorage.setItem("cart", JSON.stringify(cartArray));
  getItem()
}

function addToDocument(array) {
  let data = `
    <table>
    <thead>
    <tr>
        <td class="w-75">Product name</td>
        <td></td>
    </tr>
    </thead>
    <tbody>
    `;

  array.forEach((element, index) => {
    data += `
    <tr class="py-4">
        <td>${element.productName}</td>
        <td>
        <button data-index="${index}" class="bg-danger border-0 px-2 text-white delete">X</button>
        </td>
    </tr>
    `;
  });

  data += `</tbody>
    </table>`;
  carts.innerHTML = data;

  document.querySelectorAll(".delete").forEach((btn) => {
    btn.addEventListener("click", () => {
      let index = parseInt(btn.getAttribute("data-index"));
      deleteProduct(index);
    });
  });
}

function getItem() {
  cartArray = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

  cartNum.innerHTML = cartArray.length;
  addToDocument(cartArray)
}


getItem();
