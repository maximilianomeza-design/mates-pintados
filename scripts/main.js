/* ===================================================
   Viva el Mate 🌿 — main.js
   Funcionalidades 2025
   =================================================== */

// Scroll suave para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId.length > 1) {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// ===================================================
// ANIMACIONES DE APARICIÓN AL SCROLL
// ===================================================
const fadeElements = document.querySelectorAll(".fade-in, .producto, .historia-bloque");

function handleScrollAnimation() {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", handleScrollAnimation);
window.addEventListener("load", handleScrollAnimation);

// ===================================================
// CARRUSEL DE TESTIMONIOS (auto-deslizante)
// ===================================================
const track = document.querySelector(".testimonios-track");
if (track) {
  let offset = 0;
  setInterval(() => {
    offset -= 1;
    track.style.transform = `translateX(${offset}px)`;
    if (Math.abs(offset) >= track.scrollWidth / 2) offset = 0;
  }, 40);
}

// ===================================================
// CARRUSEL DE PORTFOLIO
// ===================================================
const portfolioTrack = document.querySelector(".slider-track");
const portfolioContainer = document.querySelector(".slider-container");

if (portfolioTrack && portfolioContainer) {
  let slideOffset = 0;
  setInterval(() => {
    slideOffset -= 1;
    portfolioTrack.style.transform = `translateX(${slideOffset}px)`;
    if (Math.abs(slideOffset) >= portfolioTrack.scrollWidth / 2) slideOffset = 0;
  }, 45);
}

// ===================================================
// FORMULARIO DE TALLERES — Validación + mensaje
// ===================================================
const formTaller = document.querySelector(".taller-form");

if (formTaller) {
  formTaller.addEventListener("submit", e => {
    e.preventDefault();

    const nombre = formTaller.querySelector("#nombre").value.trim();
    const email = formTaller.querySelector("#email").value.trim();
    const taller = formTaller.querySelector("#taller").value;

    if (!nombre || !email || !taller) {
      alert("Por favor, completá todos los campos 🌿");
      return;
    }

    // Confirmación amigable
    alert(`💛 ¡Gracias ${nombre}! Tu inscripción al taller fue registrada con éxito.\nTe enviaremos los detalles a ${email}.`);
    formTaller.reset();
  });
}

// ===================================================
// EFECTO "RESPIRACIÓN" EN EL LOGO PRINCIPAL
// ===================================================
const logo = document.querySelector(".mate-icon");

if (logo) {
  setInterval(() => {
    logo.style.transform = "scale(1.05)";
    setTimeout(() => {
      logo.style.transform = "scale(1)";
    }, 800);
  }, 3000);
}

// ===================================================
// ANIMACIÓN DE BRILLO EN LOS SPARKLES ✨
// ===================================================
const sparkles = document.querySelectorAll(".sparkle");

sparkles.forEach((sparkle, i) => {
  sparkle.style.opacity = 0.3;
  setInterval(() => {
    sparkle.style.opacity = sparkle.style.opacity === "1" ? 0.3 : 1;
  }, 1200 + i * 200);
});

// ===================================================
// DESLIZAR HACIA ARRIBA AL FINAL (footer CTA opcional)
// ===================================================
const footer = document.querySelector("footer");
if (footer) {
  footer.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
