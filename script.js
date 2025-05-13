// script.js
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu-list");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
});

// carrossel
let slideIndex = 0;
const slides = document.querySelectorAll(".carousel .slide");

function mostrarSlide(n) {
  slides.forEach((slide, index) => {
    slide.classList.remove("active");
    if (index === n) {
      slide.classList.add("active");
    }
  });
}

function mudarSlide(direcao) {
  slideIndex += direcao;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  if (slideIndex >= slides.length) slideIndex = 0;
  mostrarSlide(slideIndex);
}

// Exibe o primeiro slide ao carregar
document.addEventListener("DOMContentLoaded", () => {
  mostrarSlide(slideIndex);
});
