// Прокрутка хедера
const header = document.querySelector('.header');
function checkScroll() {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}
window.addEventListener('scroll', checkScroll);

// Мобільне меню
document.addEventListener('DOMContentLoaded', () => {
  const menuToggleButton = document.querySelector('.burger-menu');
  const menu = document.querySelector('.mobile-menu');

  // Функція для перемикання меню
  const toggleMenu = () => {
    menu.classList.toggle('active'); // Додаємо/видаляємо клас для показу меню
  };

  // Встановлюємо слухач подій на кнопку бургер-меню
  menuToggleButton.addEventListener('click', toggleMenu);

  // Закриття меню при натисканні на посилання
  const menuLinks = document.querySelectorAll('.nav-link');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
    });
  });

  // Закриття меню при кліку поза ним
  document.addEventListener('click', event => {
    if (
      menu.classList.contains('active') &&
      !menu.contains(event.target) &&
      !menuToggleButton.contains(event.target)
    ) {
      menu.classList.remove('active');
    }
  });
});
