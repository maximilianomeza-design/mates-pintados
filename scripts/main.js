document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.slider img');
  let current = 0;

  function showNextImage() {
    images[current].classList.remove('active');
    current = (current + 1) % images.length;
    images[current].classList.add('active');
  }

  setInterval(showNextImage, 4000); // cambia cada 4 segundos
});
