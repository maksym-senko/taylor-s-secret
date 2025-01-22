import iconHover from './image/hover.png';
import iconPlus from './image/plus.png';
import iconFocus from './image/focus.png';
import iconMinus from './image/minus.png';

document.querySelectorAll('.question-box').forEach(box => {
  const icon = box.querySelector('.icon');

  // Ховер на .question-box
  box.addEventListener('mouseenter', () => {
    if (icon) {
      icon.src = iconHover; // Зміна іконки при ховері
    }
  });
  box.addEventListener('mouseleave', () => {
    if (!box.classList.contains('active') && icon) {
      icon.src = iconPlus; // Повернення до початкової іконки
    }
  });

  // Фокус на .question-box (якщо він може отримати фокус)
  box.addEventListener('focus', () => {
    if (icon) {
      icon.src = iconFocus; // Зміна іконки при фокусі
    }
  });
  box.addEventListener('blur', () => {
    if (!box.classList.contains('active') && icon) {
      icon.src = iconPlus; // Повернення до початкової іконки
    }
  });

  // Клік на .question-box
  box.addEventListener('click', () => {
    const isActive = box.classList.contains('active');

    // Закриваємо всі відкриті елементи
    document.querySelectorAll('.question-box').forEach(b => {
      b.classList.remove('active');
      const icon = b.querySelector('.icon');
      if (icon) {
        icon.src = iconPlus; // Повертаємо плюс для всіх
      }
    });

    // Відкриваємо поточний елемент
    if (!isActive) {
      box.classList.add('active');
      const icon = box.querySelector('.icon');
      if (icon) {
        icon.src = iconMinus; // Мінус для активного
      }
    }
  });
});
