// Вибір елементів
const header = document.querySelector('.header');
const navigation = document.querySelector('.nav-container');
const mobileMenu = document.querySelector('.nav-menu-mobile');
const mobilePolice = document.querySelector('.police-mobile');
const navLinks = document.querySelectorAll('.nav-link');
const menuToggle = document.querySelector('.menu-toggle');
const menuIcon = menuToggle.querySelector('img'); // Іконка меню

// Функція для зміни стану меню (відкриття/закриття)
const toggleMenu = () => {
  const isExpanded = header.classList.toggle('expanded');
  navigation.classList.toggle('expanded');
  mobileMenu.classList.toggle('expanded');
  mobilePolice.classList.toggle('expanded');
  menuToggle.classList.toggle('expanded');
};

// Функція для закриття меню
const closeMenu = () => {
  header.classList.remove('expanded');
  navigation.classList.remove('expanded');
  mobileMenu.classList.remove('expanded');
  mobilePolice.classList.remove('expanded');
  menuToggle.classList.remove('expanded');
};

// Додавання слухача події на кнопку меню
menuToggle.addEventListener('click', toggleMenu);

// Додавання слухачів подій для кожного посилання в меню
navLinks.forEach(link => link.addEventListener('click', closeMenu));

// Плавна прокрутка до секцій
document.addEventListener('DOMContentLoaded', () => {
  const headerHeight = document.querySelector('.header').offsetHeight;

  document.querySelectorAll('a.nav-link[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').slice(1); // Отримуємо ID секції
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const targetPosition =
          targetElement.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
          top: targetPosition - (headerHeight + 40), // Врахування висоти хедера
          behavior: 'smooth', // Плавна прокрутка
        });
      }
    });
  });
});
