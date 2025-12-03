/* ===================================================
   🌿 Viva el Mate — main.js
   Versión emocional y fluida 2025
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
setInterval(() => moveSlide(1), 6000);
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
    if (scrollY >= section.offsetTop - 120) current = section.id;
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) link.classList.add("active");
  });
});

/* ------------------------------
   ANIMACIONES FADE-IN AL HACER SCROLL
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
  { threshold: 0.25 }
);

document.querySelectorAll("section").forEach(section => observer.observe(section));

/* ------------------------------
   MICROINTERACCIONES EN BOTONES
------------------------------ */
document.querySelectorAll("button, .btn-primary, .btn-secondary").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transition = "transform 0.25s ease, box-shadow 0.25s ease";
    btn.style.transform = "scale(1.03)";
    btn.style.boxShadow = "0 6px 14px rgba(0,0,0,0.08)";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
    btn.style.boxShadow = "0 4px 10px rgba(0,0,0,0.05)";
  });
});

/* ------------------------------
   EFECTO HOVER EN CTA DEL HERO
------------------------------ */
const heroButtons = document.querySelectorAll("#hero a");
heroButtons.forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transition = "transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1), box-shadow 0.3s ease";
    btn.style.transform = "scale(1.07)";
    btn.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.1)";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
    btn.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.05)";
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
    idealBtn.style.transition = "opacity 1.5s ease 1s";
    setTimeout(() => (idealBtn.style.opacity = "1"), 400);
  }
});

/* ------------------------------
   SLIDER TESTIMONIOS
------------------------------ */
const testimonialsTrack = document.querySelector(".testimonios-track");
if (testimonialsTrack) {
  testimonialsTrack.style.animation = "scrollTestimonials 28s linear infinite";
}

/* ------------------------------
   EFECTO FADE-IN EN IMÁGENES “Sobre Viva el Mate”
------------------------------ */
document.querySelectorAll("#sobre-vivaelmate img, #historia-viva img").forEach(img => {
  img.style.opacity = "0";
  img.style.transition = "opacity 1.2s ease-out, transform 1.2s ease-out";
  const fadeImg = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          img.style.opacity = "1";
          img.style.transform = "translateY(0)";
          fadeImg.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );
  fadeImg.observe(img);
});

/* ===================================================
   🌸 Detalle final: respiración visual
   (los botones laten suavemente cada cierto tiempo)
=================================================== */
setInterval(() => {
  document.querySelectorAll(".btn-primary, .btn-secondary").forEach(btn => {
    btn.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1.03)" },
        { transform: "scale(1)" }
      ],
      {
        duration: 4000,
        iterations: 1,
        easing: "ease-in-out"
      }
    );
  });
}, 12000);

/* ===================================================
   FIN DEL SCRIPT 🌿
=================================================== */
