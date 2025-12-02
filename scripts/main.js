/* ===================================================
   main.js — Viva el Mate 🌿
   Versión actualizada 2025 con microinteracciones suaves
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
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) link.classList.add("active");
  });
});

/* ------------------------------
   EFECTO PRESIÓN EN BOTONES
------------------------------ */
document.querySelectorAll("button, .btn-primary, .btn-secondary").forEach(btn => {
  btn.addEventListener("mousedown", () => btn.classList.add("pressed"));
  btn.addEventListener("mouseup", () => btn.classList.remove("pressed"));
});

/* ------------------------------
   ANIMACIONES FADE-IN AL HACER SCROLL
------------------------------ */
function animateOnScroll() {
  const fadeSections = document.querySelectorAll(
    "#sobre-vivaelmate, #talleres, #tienda, #testimonios, #portfolio"
  );
  fadeSections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      section.classList.add("section-visible");
    }
  });
}
document.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);

/* ------------------------------
   ANIMACIÓN DE ENTRADA SUAVE DEL HERO
------------------------------ */
window.addEventListener("load", () => {
  const hero = document.querySelector("#hero");
  if (hero) hero.classList.add("section-visible");
});

/* ------------------------------
   SCROLL REVEAL SUAVE (detalles)
------------------------------ */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("section-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll("section").forEach(sec => observer.observe(sec));

/* ------------------------------
   EFECTO HOVER MICROANIMADO EN CTA
------------------------------ */
const heroButtons = document.querySelectorAll("#hero a");
heroButtons.forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transition = "transform 0.2s ease, box-shadow 0.2s ease";
    btn.style.transform = "scale(1.05)";
    btn.style.boxShadow = "0 6px 15px rgba(0,0,0,0.1)";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
    btn.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)";
  });
});

/* ------------------------------
   SMOOTH ENTRANCE PARA EL BOTÓN “Descubrí tu mate ideal”
------------------------------ */
window.addEventListener("load", () => {
  const idealBtn = document.querySelector("a[href='elige-tu-mate.html']");
  if (idealBtn) {
    idealBtn.style.opacity = "0";
    idealBtn.style.transition = "opacity 1.2s ease 0.8s";
    setTimeout(() => (idealBtn.style.opacity = "1"), 400);
  }
});

/* ===================================================
   FIN DEL SCRIPT 🌿
=================================================== */
