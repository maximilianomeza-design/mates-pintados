/* ===================================================
   Viva el Mate 🌿 — main.js
   Versión final optimizada 2025
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
   ANIMACIONES FADE-IN AL HACER SCROLL
------------------------------ */
function animateOnScroll() {
  const sections = document.querySelectorAll("section");
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      sec.classList.add("section-visible");
    }
  });
}
document.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);

/* ------------------------------
   MICROINTERACCIONES EN BOTONES
------------------------------ */
document.querySelectorAll("button, .btn-primary, .btn-secondary").forEach(btn => {
  btn.addEventListener("mousedown", () => btn.classList.add("pressed"));
  btn.addEventListener("mouseup", () => btn.classList.remove("pressed"));
});

/* ------------------------------
   EFECTO HOVER EN CTA DEL HERO
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
   EFECTO DE ENTRADA HERO Y BOTÓN IDEAL
------------------------------ */
window.addEventListener("load", () => {
  const hero = document.querySelector("#hero");
  const idealBtn = document.querySelector("a[href='elige-tu-mate.html']");
  if (hero) hero.classList.add("section-visible");
  if (idealBtn) {
    idealBtn.style.opacity = "0";
    idealBtn.style.transition = "opacity 1.2s ease 0.8s";
    setTimeout(() => (idealBtn.style.opacity = "1"), 400);
  }
});

/* ------------------------------
   SLIDER TESTIMONIOS (animación automática)
------------------------------ */
const testimonialsTrack = document.querySelector(".testimonios-track");
if (testimonialsTrack) {
  testimonialsTrack.style.animation = "scrollTestimonials 30s linear infinite";
}

/* ------------------------------
   EFECTO FADE-IN IMAGENES “Sobre Viva el Mate”
------------------------------ */
const sobreImg = document.querySelector("#sobre-vivaelmate img");
if (sobreImg) {
  sobreImg.style.opacity = "0";
  sobreImg.style.transition = "opacity 1s ease-out, transform 1s ease-out";
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          sobreImg.style.opacity = "1";
          sobreImg.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );
  observer.observe(sobreImg);
}

/* ===================================================
   FIN DEL SCRIPT 🌿
=================================================== */
