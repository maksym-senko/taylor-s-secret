// Функція для зміни зображення і стану меню
const toggleMenu = () => {
  const isExpanded = header.classList.toggle('expanded');
  navigation.classList.toggle('expanded');
  mobileMenu.classList.toggle('expanded');
  mobilePolice.classList.toggle('expanded');

  menuIcon.src = isExpanded ? '/image/close.png' : '/image/open.png';
};

// Функція для закриття меню
const closeMenu = () => {
  header.classList.remove('expanded');
  navigation.classList.remove('expanded');
  mobileMenu.classList.remove('expanded');
  mobilePolice.classList.remove('expanded');
  menuIcon.src = '/image/close.png';
};

// Вибір елементів
const header = document.querySelector('.header');
const navigation = document.querySelector('.nav-container');
const menuToggle = document.querySelector('.menu-toggle');
const menuIcon = menuToggle.querySelector('img');
const mobileMenu = document.querySelector('.nav-menu-mobile');
const mobilePolice = document.querySelector('.police-mobile');
const navLinks = document.querySelectorAll('.nav-link');

// Додавання слухача події для кнопки меню
menuToggle.addEventListener('click', toggleMenu);

// Додавання слухачів події для кожного посилання
navLinks.forEach(link => link.addEventListener('click', closeMenu));

// Обробка плавної прокрутки
document.addEventListener('DOMContentLoaded', () => {
  const headerHeight = document.querySelector('.header').offsetHeight;

  document.querySelectorAll('a.nav-link[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const targetPosition =
          targetElement.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: targetPosition - (headerHeight + 40),
          behavior: 'smooth',
        });
      }
    });
  });
});

// Логування для перевірки правильності елементів
console.log(menuToggle, menuIcon);
