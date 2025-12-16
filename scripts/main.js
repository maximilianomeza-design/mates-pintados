/* ===================================================
   Viva el Mate 🌿 — main.js
   Funcionalidades 2025
=================================================== */

/* ===================================================
   SCROLL SUAVE PARA NAVEGACIÓN
=================================================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", e => {
    const targetId = anchor.getAttribute("href");
    if (targetId.length > 1) {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

/* ===================================================
   ANIMACIONES DE APARICIÓN AL SCROLL
=================================================== */
const fadeElements = document.querySelectorAll(".fade-in, .producto, .historia-bloque");

function handleScrollAnimation() {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) el.classList.add("visible");
  });
}

window.addEventListener("scroll", () => requestAnimationFrame(handleScrollAnimation));
window.addEventListener("load", handleScrollAnimation);

/* ===================================================
   CARRUSEL DE TESTIMONIOS (auto-deslizante)
=================================================== */
const track = document.querySelector(".testimonios-track");
if (track) {
  let offset = 0;
  const scrollSpeed = 40;
  setInterval(() => {
    offset -= 1;
    track.style.transform = `translateX(${offset}px)`;
    if (Math.abs(offset) >= track.scrollWidth / 2) offset = 0;
  }, scrollSpeed);
}

/* ===================================================
   CARRUSEL DE PORTFOLIO (auto)
=================================================== */
const portfolioTrack = document.querySelector(".slider-track");
const portfolioContainer = document.querySelector(".slider-container");

if (portfolioTrack && portfolioContainer) {
  let slideOffset = 0;
  const slideSpeed = 45;
  setInterval(() => {
    slideOffset -= 1;
    portfolioTrack.style.transform = `translateX(${slideOffset}px)`;
    if (Math.abs(slideOffset) >= portfolioTrack.scrollWidth / 2) slideOffset = 0;
  }, slideSpeed);
}

/* ===================================================
   FORMULARIO DE TALLERES — Validación + Mensaje
=================================================== */
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

    alert(`💛 ¡Gracias ${nombre}! Tu inscripción al taller fue registrada con éxito.\nTe enviaremos los detalles a ${email}.`);
    formTaller.reset();
  });
}

/* ===================================================
   LOGO PRINCIPAL — Efecto "Respiración"
=================================================== */
const logo = document.querySelector(".mate-icon");
if (logo) {
  setInterval(() => {
    logo.style.transform = "scale(1.05)";
    setTimeout(() => {
      logo.style.transform = "scale(1)";
    }, 800);
  }, 3000);
}

/* ===================================================
   ANIMACIÓN DE BRILLO ✨ (Sparkles)
=================================================== */
const sparkles = document.querySelectorAll(".sparkle");
sparkles.forEach((sparkle, i) => {
  sparkle.style.opacity = 0.3;
  setInterval(() => {
    sparkle.style.opacity = sparkle.style.opacity === "1" ? 0.3 : 1;
  }, 1200 + i * 200);
});

/* ===================================================
   FOOTER — Volver arriba
=================================================== */
const footer = document.querySelector("footer");
if (footer) {
  footer.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ===================================================
   MENÚ RESPONSIVE (Hamburguesa)
=================================================== */
const menuToggle = document.querySelector(".menu-toggle");
const menuList = document.getElementById("menu-list");

if (menuToggle && menuList) {
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", !expanded);
    menuList.classList.toggle("active");

    // animación de aparición
    if (menuList.classList.contains("active")) {
      menuList.style.opacity = "1";
      menuList.style.transform = "translateY(0)";
    } else {
      menuList.style.opacity = "0";
      menuList.style.transform = "translateY(-10px)";
    }
  });

  // Cierra el menú al hacer clic en un enlace
  menuList.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      menuList.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}
