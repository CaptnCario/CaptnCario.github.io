const images = document.querySelectorAll('.gallery img');
const overlay = document.getElementById('bg-overlay');

images.forEach(img => {
  img.addEventListener('mouseover', () => {
    overlay.style.backgroundImage = `url(${img.src})`;
    overlay.style.opacity = 1;
  });

  img.addEventListener('mouseout', () => {
    overlay.style.opacity = 0;
  });
});