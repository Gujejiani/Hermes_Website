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

const preview = document.querySelector(".product-view");

const previewResult = document.querySelector(".img-zoom-result");

const view = document.querySelector(".product-view");
if (view) {
  mainImg.addEventListener("mousemove", function (e) {
    let x = e.offsetX;
    let y = e.offsetY;

    view.style.marginLeft = x - 50 + "px";
    view.style.marginTop = y - 50 + "px";
    console.log(x);
    console.log(view);
  });
}
imageZoom("main-Img", "preview");
function imageZoom(imgID, resultID) {
  var img, lens, result, cx, cy;
  img = document.getElementById(imgID);
  result = document.getElementById(resultID);
  /* Create lens: */
  lens = document.createElement("DIV");
  lens.setAttribute("class", "img-zoom-lens");
  /* Insert lens: */
  img.parentElement.insertBefore(lens, img);
  /* Calculate the ratio between result DIV and lens: */
  cx = result.offsetWidth / lens.offsetWidth;
  cy = result.offsetHeight / lens.offsetHeight;
  /* Set background properties for the result DIV */
  result.style.backgroundImage = "url('" + img.src + "')";
  result.style.backgroundSize = img.width * cx + "px " + img.height * cy + "px";
  /* Execute a function when someone moves the cursor over the image, or the lens: */
  lens.addEventListener("mousemove", moveLens);
  img.addEventListener("mousemove", moveLens);
  /* And also for touch screens: */
  lens.addEventListener("touchmove", moveLens);
  img.addEventListener("touchmove", moveLens);
  function moveLens(e) {
    var pos, x, y;
    /* Prevent any other actions that may occur when moving over the image */
    e.preventDefault();
    /* Get the cursor's x and y positions: */
    pos = getCursorPos(e);
    /* Calculate the position of the lens: */
    x = pos.x - lens.offsetWidth / 2;
    y = pos.y - lens.offsetHeight / 2;
    /* Prevent the lens from being positioned outside the image: */
    if (x > img.width - lens.offsetWidth) {
      x = img.width - lens.offsetWidth;
      preview.classList.remove("visible");
      previewResult.classList.remove("visible");
    }
    if (x < img.width - lens.offsetWidth) {
      preview.classList.add("visible");
      previewResult.classList.add("visible");
    }
    if (x < 0) {
      x = 0;
      preview.classList.remove("visible");
      previewResult.classList.remove("visible");
    }
    if (x > 0 && x > img.width - lens.offsetWidth) {
      preview.classList.add("visible");
      previewResult.classList.add("visible");
    }

    if (y > img.height - lens.offsetHeight) {
      y = img.height - lens.offsetHeight;
      preview.classList.remove("visible");
      previewResult.classList.remove("visible");
    }

    if (y < 0) {
      y = 0;
      preview.classList.remove("visible");
      previewResult.classList.remove("visible");
    }
    /* Set the position of the lens: */
    lens.style.left = x + "px";
    lens.style.top = y + "px";

    /* Display what the lens "sees": */
    result.style.backgroundPosition = "-" + x * cx + "px -" + y * cy + "px";
  }
  function getCursorPos(e) {
    var a,
      x = 0,
      y = 0;
    e = e || window.event;
    /* Get the x and y positions of the image: */
    a = img.getBoundingClientRect();
    /* Calculate the cursor's x and y coordinates, relative to the image: */
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /* Consider any page scrolling: */
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return { x: x, y: y };
  }
}
