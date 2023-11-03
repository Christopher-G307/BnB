const navBar = document.getElementById("navBar");

let bars = document.querySelector(".fa-bars-staggered");

bars.addEventListener("click", () => {
  navBar.classList.toggle("hidemenu");
});

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 150,
    modifier: 3,
    slideShadows: true,
  },
  spaceBetween: 30,

  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
    },
    1560: {
      slidesPerView: 3,
    },
  },
});
