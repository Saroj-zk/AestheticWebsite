const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const headerMenu = document.getElementById("header");

// Open Close Navbar Menu on Click Burger
if (burgerMenu && navbarMenu) {
   burgerMenu.addEventListener("click", () => {
      burgerMenu.classList.toggle("is-active");
      navbarMenu.classList.toggle("is-active");
   });
}

// Close Navbar Menu on Click Menu Links
document.querySelectorAll(".menu-link").forEach((link) => {
   link.addEventListener("click", () => {
      burgerMenu.classList.remove("is-active");
      navbarMenu.classList.remove("is-active");
   });
});

// Change Header Background on Scrolling
window.addEventListener("scroll", () => {
   if (this.scrollY >= 85) {
      headerMenu.classList.add("on-scroll");
   } else {
      headerMenu.classList.remove("on-scroll");
   }
});

// Fixed Navbar Menu on Window Resize
window.addEventListener("resize", () => {
   if (window.innerWidth > 768) {
      if (navbarMenu.classList.contains("is-active")) {
         navbarMenu.classList.remove("is-active");
      }
   }
});
let currentSlide = 0;
const nftContainer = document.querySelector('.nft-container');
const totalSlides = document.querySelectorAll('.nft').length;
const nftWidth = document.querySelector('.nft').offsetWidth + 20; // Get the width of an NFT plus margin
const visibleSlides = Math.floor(nftContainer.offsetWidth / nftWidth); // Number of visible slides

// Function to check the slider boundaries
function checkButtons() {
  const leftButton = document.querySelector('.slider-button.left');
  const rightButton = document.querySelector('.slider-button.right');

  if (currentSlide === 0) {
    leftButton.disabled = true;
  } else {
    leftButton.disabled = false;
  }

  if (currentSlide >= totalSlides - visibleSlides) {
    rightButton.disabled = true;
  } else {
    rightButton.disabled = false;
  }
}

function moveSlide(direction) {
  currentSlide += direction;

  // Ensure the current slide doesn't exceed boundaries
  if (currentSlide < 0) {
    currentSlide = 0;
  } else if (currentSlide > totalSlides - visibleSlides) {
    currentSlide = totalSlides - visibleSlides;
  }

  nftContainer.style.transform = `translateX(-${currentSlide * nftWidth}px)`;

  checkButtons(); // Check and update button states
}

// Initial check for button states
checkButtons();
