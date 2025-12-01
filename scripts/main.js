/* ===================================================
   main.js — Viva el Mate 🌿
   =================================================== */

// Slider Portfolio
const track = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".slider-track figure");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let currentIndex = 0;
const slidesPerView = 3;

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
setInterval(() => moveSlide(1), 5000);
updateSliderPosition();

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    const target = document.querySelector(a.getAttribute("href"));
    if (target) {
      e.preventDefault();
      window.scrollTo({ top: target.offsetTop - 80, behavior: "smooth" });
    }
  });
});

// Nav activa
const navLinks = document.querySelectorAll("nav a");
window.addEventListener("scroll", () => {
  let current = "";
  document.querySelectorAll("section[id]").forEach(section => {
    if (scrollY >= section.offsetTop - 100) current = section.id;
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) link.classList.add("active");
  });
});

// Efecto de click en botones
document.querySelectorAll("button, .btn-primary, .btn-secondary").forEach(btn => {
  btn.addEventListener("mousedown", () => btn.classList.add("pressed"));
  btn.addEventListener("mouseup", () => btn.classList.remove("pressed"));
});

// Ajuste visual Portfolio
window.addEventListener("load", () => {
  document.querySelectorAll(".slider-track img").forEach(img => {
    img.style.height = "300px";
    img.style.objectFit = "cover";
  });
});
// Mostrar animación al hacer scroll
document.addEventListener("scroll", () => {
  const section = document.querySelector("#sobre-vivaelmate");
  const rect = section.getBoundingClientRect();
  if (rect.top < window.innerHeight * 0.8) {
    section.classList.add("visible");
  }
});
