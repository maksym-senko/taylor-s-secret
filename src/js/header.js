document.addEventListener('DOMContentLoaded', function () {
  const openMenuBtn = document.querySelector('.open-menu-btn');
  const closeMenuBtn = document.querySelector('.cross-btn');
  const burgerMenu = document.querySelector('.burger-menu');

  openMenuBtn.addEventListener('click', function () {
    burgerMenu.classList.add('is-open');
    burgerMenu.removeAttribute('inert');
    burgerMenu.setAttribute('aria-hidden', 'false');

    const firstLink = burgerMenu.querySelector('.nav-link-menu');
    if (firstLink) firstLink.focus();
  });

  closeMenuBtn.addEventListener('click', function () {
    burgerMenu.classList.remove('is-open');
    burgerMenu.setAttribute('inert', '');
    burgerMenu.setAttribute('aria-hidden', 'true');
    closeMenuBtn.blur();
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && burgerMenu.classList.contains('is-open')) {
      closeMenuBtn.click();
    }
  });
});
