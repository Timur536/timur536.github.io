const header = document.querySelector('.header');
const scrollThreshold = 50; // Количество пикселей скролла до появления тени


window.addEventListener('scroll', () => {
    if (window.scrollY > scrollThreshold) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });