// Get elements
const privacyPolicyBtn = document.getElementById('privacy-policy-btn');
const termsConditionsBtn = document.getElementById('terms-conditions-btn');
const privacyPolicyModal = document.getElementById('privacy-policy-modal');
const termsConditionsModal = document.getElementById('terms-conditions-modal');
const closePrivacyPolicy = document.getElementById('close-privacy-policy');
const closeTermsConditions = document.getElementById('close-terms-conditions');

// Open modal for Privacy Policy
privacyPolicyBtn.addEventListener('click', e => {
  e.preventDefault();
  privacyPolicyModal.style.display = 'block';
});

// Open modal for Terms and Conditions
termsConditionsBtn.addEventListener('click', e => {
  e.preventDefault();
  termsConditionsModal.style.display = 'block';
});

// Close modals
closePrivacyPolicy.addEventListener('click', () => {
  privacyPolicyModal.style.display = 'none';
});

closeTermsConditions.addEventListener('click', () => {
  termsConditionsModal.style.display = 'none';
});

// Close modals when clicking outside the modal content
window.addEventListener('click', e => {
  if (e.target === privacyPolicyModal) {
    privacyPolicyModal.style.display = 'none';
  } else if (e.target === termsConditionsModal) {
    termsConditionsModal.style.display = 'none';
  }
});
