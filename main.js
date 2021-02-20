const burgerMenu = document.getElementById("check");
const menuForm = document.querySelector(".mobile__menu");
const navMenuOverlay = document.querySelector(".mob__nav__overlay");

burgerMenu.addEventListener("change", function () {
  menuForm.classList.toggle("toggle__mobile--menu");
  navMenuOverlay.classList.toggle("show");
});

navMenuOverlay.addEventListener("click", function () {
  menuForm.classList.toggle("toggle__mobile--menu");
  navMenuOverlay.classList.remove("show");
  document.getElementById("check").checked = false;
});
