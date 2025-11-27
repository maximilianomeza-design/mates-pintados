document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.slider img');
  let current = 0;

  function showNextImage() {
    images[current].classList.remove('active');
    current = (current + 1) % images.length;
    images[current].classList.add('active');
  }

  setInterval(showNextImage, 2000); // cambia cada 2 segundos
});
