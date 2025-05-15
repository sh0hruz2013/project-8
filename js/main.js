$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
// animation//
const loading = document.getElementById("loading");

const loadingDuration = 2000; // 2s

setTimeout(() => {
  loading.classList.add("loading-none");
}, loadingDuration);
// link
AOS.init();
// Hamburger
let btn = document.querySelector("#hamburger");
let navMenu = document.querySelector(".nav-menu");
btn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
document.getElementById("hamburger").addEventListener("click", function () {
  const navMenu = document.querySelector(".nav-menu");
  navMenu.classList.toggle("show");
});
