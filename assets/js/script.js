// Hamburger menu toggle

document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.getElementById("hamburger");
  const navContainer = document.getElementById("nav-container");

  hamburger.addEventListener("click", function() {
    navContainer.classList.toggle("active");
  });

  document.addEventListener("click", function (e) {
    if (
      !navContainer.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      navContainer.classList.remove("active");
    }
  });
});

// Swiper logic 
const swiper = new Swiper(".mySwiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-after",
    prevEl: ".swiper-button-before",
  },
});


// marquee 
 const track = document.getElementById("marqueeTrack");
  const item = track.querySelector(".marquee-item");

  const itemWidth = item.offsetWidth + 60; 
  const wrapperWidth = track.parentElement.offsetWidth;

  const minItems = Math.ceil(wrapperWidth * 2 / itemWidth);

  for (let i = 1; i < minItems; i++) {
    const clone = item.cloneNode(true);
    track.appendChild(clone);
  }






