// Changing the image for mobile version

const imageElement = document.querySelector(".product-image");
const mobileImageUrl = "./images/image-product-mobile.jpg";
const desktopImageUrl = "./images/image-product-desktop.jpg";

function handleMediaQueryChange(mediaQuery) {
  if (mediaQuery.matches) {
    imageElement.src = mobileImageUrl;
  } else {
    imageElement.src = desktopImageUrl;
  }
}

const mediaQuery = window.matchMedia("(max-width:420px)");

handleMediaQueryChange(mediaQuery);
mediaQuery.addEventListener("change", handleMediaQueryChange);