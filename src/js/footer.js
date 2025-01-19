// Вибір елементів для модальних вікон
const privacyPolicyModal = document.getElementById('privacy-policy-modal');
const privacyPolicyBtn = document.getElementById('privacy-policy-btn');
const closePrivacyPolicyBtn = document.getElementById('close-privacy-policy');

const termsConditionsModal = document.getElementById('terms-conditions-modal');
const termsConditionsBtn = document.getElementById('terms-conditions-btn');
const closeTermsConditionsBtn = document.getElementById(
  'close-terms-conditions'
);

// Функція для відкриття модального вікна
function openModal(modal) {
  modal.style.display = 'block';
}

// Функція для закриття модального вікна
function closeModal(modal) {
  modal.style.display = 'none';
}

// Додавання подій для відкриття та закриття модальних вікон
function addModalEventListeners(btn, modal, closeBtn) {
  btn.addEventListener('click', () => {
    openModal(modal);
  });

  closeBtn.addEventListener('click', () => {
    closeModal(modal);
  });

  window.addEventListener('click', event => {
    if (event.target === modal) {
      closeModal(modal);
    }
  });
}

// Використовуємо функцію для обох модальних вікон
addModalEventListeners(
  privacyPolicyBtn,
  privacyPolicyModal,
  closePrivacyPolicyBtn
);
addModalEventListeners(
  termsConditionsBtn,
  termsConditionsModal,
  closeTermsConditionsBtn
);

// Функція для перевірки слухачів подій
function checkEventListeners(elem) {
  const clone = elem.cloneNode(true);
  const hasListeners = clone.outerHTML !== elem.outerHTML;
  console.log(`Element ${elem.id} has event listeners:`, hasListeners);
}

// Використання для перевірки
checkEventListeners(privacyPolicyBtn);
checkEventListeners(termsConditionsBtn);
