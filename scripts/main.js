/* ===================================================
   main.js — Viva el Mate 🌿
   Versión final optimizada — 2025
=================================================== */

/* ------------------------------
   SLIDER DEL PORTFOLIO
------------------------------ */
const track = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".slider-track figure");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let currentIndex = 0;
const slidesPerView = 3;

function updateSliderPosition() {
  if (!track) return;
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

// Controles manuales y auto desplazamiento
prevBtn?.addEventListener("click", () => moveSlide(-1));
nextBtn?.addEventListener("click", () => moveSlide(1));
setInterval(() => moveSlide(1), 5000);
updateSliderPosition();

/* ------------------------------
   SCROLL SUAVE ENTRE SECCIONES
------------------------------ */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      window.scrollTo({ top: target.offsetTop - 80, behavior: "smooth" });
    }
  });
});

/* ------------------------------
   MENÚ ACTIVO AL HACER SCROLL
------------------------------ */
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  document.querySelectorAll("section[id]").forEach(section => {
    if (scrollY >= section.offsetTop - 100) current = section.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
});

/* ------------------------------
   EFECTO PRESIÓN EN BOTONES
------------------------------ */
document.querySelectorAll("button, .btn-primary, .btn-secondary, .btn-sobre, .btn-volver").forEach(btn => {
  btn.addEventListener("mousedown", () => btn.classList.add("pressed"));
  btn.addEventListener("mouseup", () => btn.classList.remove("pressed"));
});

/* ------------------------------
   AJUSTE VISUAL PORTFOLIO
------------------------------ */
window.addEventListener("load", () => {
  document.querySelectorAll(".slider-track img").forEach(img => {
    img.style.height = "300px";
    img.style.objectFit = "cover";
  });
});

/* ------------------------------
   ANIMACIONES AL HACER SCROLL
------------------------------ */
function animateOnScroll() {
  const sections = document.querySelectorAll("section, .historia-bloque");
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      section.classList.add("visible", "section-visible");
    }
  });
}

document.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);

/* ===================================================
   FIN DEL SCRIPT 🌿
=================================================== */
