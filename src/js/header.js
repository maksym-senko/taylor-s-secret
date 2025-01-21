const header = document.querySelector('.header');
const navigation = document.querySelector('.nav-container');
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.nav-menu-mobile');
const mobilePolice = document.querySelector('.police-mobile');

menuToggle.addEventListener('click', () => {
  header.classList.toggle('expanded');
  navigation.classList.toggle('expanded');
  mobileMenu.classList.toggle('expanded');
  mobilePolice.classList.toggle('expanded');
});

const menuIcon = document.querySelector('.menu-icon');

menuToggle.addEventListener('click', () => {
  if (menuIcon.src.includes('cross-menu.png')) {
    menuIcon.src = './image/menu-open.png';
  } else {
    menuIcon.src = './image/cross-menu.png';
  }
});

menuToggle.addEventListener('click', () => {
  document.body.classList.toggle('expanded');
  mobileMenu.classList.toggle('active');
});
