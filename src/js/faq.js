document.addEventListener('DOMContentLoaded', () => {
  const questionBoxes = document.querySelectorAll('.question-box');

  questionBoxes.forEach(box => {
    box.addEventListener('click', function () {
      const isActive = this.classList.contains('active');

      // Закриваємо всі інші питання
      questionBoxes.forEach(item => {
        item.classList.remove('active');
        item.querySelector('.toggle-icon').textContent = '+';
      });

      // Якщо питання неактивне, відкриваємо його
      if (!isActive) {
        this.classList.add('active');
        this.querySelector('.toggle-icon').textContent = '-';
      }
    });
  });
});
