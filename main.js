const burgerMenu = document.getElementById("check");
const menuForm = document.querySelector(".mobile__menu");
burgerMenu.addEventListener("change", function () {
  menuForm.classList.toggle("toggle__mobile--menu");
});
