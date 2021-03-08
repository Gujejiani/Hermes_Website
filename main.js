const burgerMenu = document.getElementById("check");
const menuForm = document.querySelector(".mobile__menu");
const navMenuOverlay = document.querySelector(".mob__nav__overlay");
const cartClose = document.querySelector(".cart__close");
const cartIcon = document.querySelector(".nav__icons__cart");
const cart = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");

burgerMenu.addEventListener("change", function () {
  menuForm.classList.toggle("toggle__mobile--menu");
  navMenuOverlay.classList.toggle("show");
});

navMenuOverlay.addEventListener("click", function () {
  menuForm.classList.toggle("toggle__mobile--menu");
  navMenuOverlay.classList.remove("show");
  document.getElementById("check").checked = false;
});

cartIcon.addEventListener("click", function (e) {
  cart.classList.toggle("cart--show");
  cartOverlay.classList.toggle("cart-overlay--show");
});

cartClose.addEventListener("click", function () {
  cart.classList.toggle("cart--show");
  cartOverlay.classList.toggle("cart-overlay--show");
});

cartOverlay.addEventListener("click", function () {
  cart.classList.toggle("cart--show");
  cartOverlay.classList.toggle("cart-overlay--show");
});

const mainImg = document.querySelector(".product-item__images__main");
const imagesContainer = document.querySelector(
  ".product-item__images__examples"
);
const imagesExamples = document.querySelectorAll(".product-item__img");
const quantity = document.querySelector(".quantity");
const quantityContainer = document.querySelector(".product-info__quantity");

let quantityNum = 1;

if (imagesContainer) {
  quantityContainer.addEventListener("click", function (e) {
    const accType = e.target.dataset?.id;
    if (!accType) return;

    if (accType === "plus") {
      quantityNum++;
      quantity.innerHTML = quantityNum;
    }
    if (accType === "minus" && quantityNum > 1) {
      quantityNum--;
      quantity.innerHTML = quantityNum;
    }
  });

  const removeImageBorder = () => {
    imagesExamples.forEach((img) => {
      if (img.classList.contains("current__image")) {
        img.classList.remove("current__image");
      }
    });
  };

  imagesContainer.addEventListener("click", function (e) {
    const img = e.target;
    if (img.nodeName === "IMG") {
      const imgSrc = img.src;
      mainImg.src = imgSrc;
      removeImageBorder();
      img.classList.add("current__image");
    }
  });
}

const view = document.querySelector(".product-view");

mainImg.addEventListener("mousemove", function (e) {
  let x = e.offsetX;
  let y = e.offsetY;
  // view.style.left = `${x}px`;
  // view.style.top = `${y + 100}px`;
  view.style.marginLeft = x + "px";
  view.style.marginTop = y + "px";
  console.log(x);
  console.log(view);
});
