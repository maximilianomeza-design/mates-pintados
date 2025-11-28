/* ===================================================
   main.js — Viva el Mate 🌿
   Interacciones y animaciones 2025
   =================================================== */

// =========================
// 1. SLIDER PORTFOLIO CORREGIDO
// =========================
const track = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".slider-track figure");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;
const slidesPerView = 3; // número de imágenes visibles al mismo tiempo

function updateSliderPosition() {
  const totalSlides = slides.length;
  const maxIndex = Math.ceil(totalSlides / slidesPerView) - 1;

  if (currentIndex > maxIndex) currentIndex = 0;
  if (currentIndex < 0) currentIndex = maxIndex;

  const offset = -currentIndex * (100 / slidesPerView);
  track.style.transform = `translateX(${offset}%)`;
}

function moveSlide(direction) {
  currentIndex += direction;
  updateSliderPosition();
}

prevBtn?.addEventListener("click", () => moveSlide(-1));
nextBtn?.addEventListener("click", () => moveSlide(1));

// Auto deslizamiento cada 5 segundos
setInterval(() => moveSlide(1), 5000);

// Inicializar
updateSliderPosition();

// =========================
// 2. SCROLL SUAVE ENTRE SECCIONES
// =========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth"
      });
    }
  });
});

// =========================
// 3. NAV ACTIVO SEGÚN SCROLL
// =========================
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  document.querySelectorAll("section[id]").forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// =========================
// 4. ANIMACIÓN DE BOTONES
// =========================
document.querySelectorAll("button, .btn-primary, .btn-secondary").forEach(btn => {
  btn.addEventListener("mousedown", () => btn.classList.add("pressed"));
  btn.addEventListener("mouseup", () => btn.classList.remove("pressed"));
});

// =========================
// 5. AJUSTE VISUAL PORTFOLIO
// (igualar alturas y suavizar transición)
// =========================
window.addEventListener("load", () => {
  const images = document.querySelectorAll(".slider-track img");
  images.forEach(img => {
    img.style.height = "300px";
    img.style.objectFit = "cover";
  });
});
