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
