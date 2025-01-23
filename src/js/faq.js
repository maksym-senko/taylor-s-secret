import iconHover from '../image/hover.png';
import iconPlus from '../image/plus.png';
import iconFocus from '../image/focus.png';
import iconMinus from '../image/minus.png';
import iconMinusHover from '../image/hover-minus.png';

document.querySelectorAll('.question-box').forEach(box => {
  const icon = box.querySelector('.icon');

  // Ховер для миші та мобільних пристроїв
  const handleHoverStart = () => {
    if (box.classList.contains('active') && icon) {
      icon.src = iconMinusHover; // Ховер для відкритого елемента
    } else if (!box.classList.contains('active') && icon) {
      icon.src = iconHover; // Ховер для закритого елемента
    }
  };

  const handleHoverEnd = () => {
    if (box.classList.contains('active') && icon) {
      icon.src = iconMinus; // Повернення мінуса для відкритого елемента
    } else if (!box.classList.contains('active') && icon) {
      icon.src = iconPlus; // Повернення плюса для закритого елемента
    }
  };

  // Додавання подій для миші
  box.addEventListener('mouseenter', handleHoverStart);
  box.addEventListener('mouseleave', handleHoverEnd);

  // Додавання подій для мобільних пристроїв
  box.addEventListener('touchstart', handleHoverStart);
  box.addEventListener('touchend', handleHoverEnd);

  // Фокус на .question-box
  box.addEventListener('focus', () => {
    if (!box.classList.contains('active') && icon) {
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
      if (icon) {
        icon.src = iconMinus; // Мінус для активного
      }
    }
  });
});
