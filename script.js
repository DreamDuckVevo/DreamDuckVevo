//ajustar tamaño del slider
const swiperEl = document.querySelector("swiper-container");

function checkScreenSize() {
  if (window.innerWidth < 700) {
    swiperEl.setAttribute("slides-per-view", "1");
  } else if (window.innerWidth < 920) {
    swiperEl.setAttribute("slides-per-view", "2");
  } else if (window.innerWidth < 1400) {
    swiperEl.setAttribute("slides-per-view", "3");
  } else {
    swiperEl.setAttribute("slides-per-view", "4");
  }
}

// Ejecutar la función cuando la página se carga
window.addEventListener("load", checkScreenSize);

// Ejecutar la función cada vez que se cambia el tamaño de la ventana
window.addEventListener("resize", checkScreenSize);
