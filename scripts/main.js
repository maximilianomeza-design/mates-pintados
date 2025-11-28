/* ===================================================
   main.js — Viva el Mate 🌿
   Efectos, interacciones y slider
   =================================================== */

// =========================
// 1. SLIDER PORTFOLIO
// =========================
const track = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".slider-track figure");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

// Mueve el carrusel hacia la dirección indicada
function moveSlide(direction) {
  const totalSlides = slides.length;
  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
  updateSliderPosition();
}

// Actualiza la posición del slider
function updateSliderPosition() {
  const slidesPerView = 3; // cantidad de imágenes visibles
  const offset = -currentIndex * (100 / slidesPerView);
  track.style.transform = `translateX(${offset}%)`;
}

// Botones
prevBtn?.addEventListener("click", () => moveSlide(-1));
nextBtn?.addEventListener("click", () => moveSlide(1));

// Auto deslizamiento cada 6 segundos
setInterval(() => moveSlide(1), 6000);

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
