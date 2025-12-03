/* ===================================================
   Viva el Mate 🌿 — main.js
   Restaurado + optimizado (versión estable)
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
   MENÚ ACTIVO SEGÚN SCROLL
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
   FADE-IN SUAVE CON OBSERVER
------------------------------ */
const fadeObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("section-visible");
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll("section").forEach(section => fadeObserver.observe(section));

/* ------------------------------
   MICROINTERACCIONES (suaves)
------------------------------ */
document.querySelectorAll("button, .btn-primary, .btn-secondary").forEach(btn => {
  btn.addEventListener("mousedown", () => (btn.style.transform = "scale(0.97)"));
  btn.addEventListener("mouseup", () => (btn.style.transform = "scale(1)"));
});

/* ------------------------------
   ENTRADA HERO + BOTÓN “MATE IDEAL”
------------------------------ */
window.addEventListener("load", () => {
  const hero = document.querySelector("#hero");
  const idealBtn = document.querySelector("a[href='elige-tu-mate.html']");
  if (hero) hero.classList.add("section-visible");
  if (idealBtn) {
    idealBtn.style.opacity = "0";
    idealBtn.style.transition = "opacity 1s ease 0.8s";
    setTimeout(() => (idealBtn.style.opacity = "1"), 400);
  }
});

/* ------------------------------
   SLIDER TESTIMONIOS (autoplay)
------------------------------ */
const testimonialsTrack = document.querySelector(".testimonios-track");
if (testimonialsTrack) {
  testimonialsTrack.style.animation = "scrollTestimonials 30s linear infinite";
}

/* ------------------------------
   EFECTO FADE EN IMÁGENES SOBRE.HTML
------------------------------ */
document.querySelectorAll("#sobre-vivaelmate img, #historia-viva img").forEach(img => {
  img.style.opacity = "0";
  img.style.transition = "opacity 1s ease-out, transform 1s ease-out";
  const obs = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          img.style.opacity = "1";
          img.style.transform = "translateY(0)";
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );
  obs.observe(img);
});

/* ===================================================
   FIN DEL SCRIPT 🌿
=================================================== */
