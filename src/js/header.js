document.addEventListener('DOMContentLoaded', function () {
  const headerHeight = document.querySelector('.header').offsetHeight;

  // Додаємо відступ при кліку на якірне посилання
  document.querySelectorAll('a.nav-link[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const targetPosition =
          targetElement.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
          top: targetPosition - headerHeight, // Відступ на висоту хедера
          behavior: 'smooth',
        });
      }
    });
  });
});
