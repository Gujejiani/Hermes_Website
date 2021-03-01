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
