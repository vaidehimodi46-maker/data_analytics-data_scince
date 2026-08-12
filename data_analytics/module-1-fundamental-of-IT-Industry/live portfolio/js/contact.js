/* ==========================================================================
   VAIDEHI MODI PORTFOLIO - CONTACT FORM VALIDATION & TOAST ALERT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initContactForm();
});

function initContactForm() {
  const form = document.getElementById('portfolio-contact-form');
  if (!form) return;

  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const phoneInput = document.getElementById('contact-phone');
  const subjectInput = document.getElementById('contact-subject');
  const messageInput = document.getElementById('contact-message');
  const submitBtn = document.getElementById('contact-submit-btn');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Reset error messages
    clearErrors();

    let isValid = true;

    // 1. Name Validation
    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      showError(nameInput, 'Please enter your full name (minimum 2 characters).');
      isValid = false;
    }

    // 2. Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
      showError(emailInput, 'Please enter a valid email address.');
      isValid = false;
    }

    // 3. Phone Validation
    const phoneDigits = phoneInput.value.replace(/\D/g, '');
    if (!phoneInput.value.trim() || phoneDigits.length < 8) {
      showError(phoneInput, 'Please enter a valid phone number (minimum 8 digits).');
      isValid = false;
    }

    // 4. Subject Validation
    if (!subjectInput.value.trim() || subjectInput.value.trim().length < 3) {
      showError(subjectInput, 'Please enter a subject line.');
      isValid = false;
    }

    // 5. Message Validation
    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      showError(messageInput, 'Please enter a detailed message (minimum 10 characters).');
      isValid = false;
    }

    if (!isValid) return;

    // Show Loading state on button
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Sending Message...`;

    // Simulate form submission delay
    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;

      // Show Success Toast
      showSuccessToast('Thank you! Your message has been sent successfully. Vaidehi will connect with you shortly.');

      // Reset form fields
      form.reset();
    }, 1200);
  });

  function showError(inputEl, message) {
    inputEl.classList.add('border-red-500', 'bg-red-950/20');
    let errDiv = inputEl.parentElement.querySelector('.error-msg');
    if (!errDiv) {
      errDiv = document.createElement('div');
      errDiv.className = 'error-msg text-xs text-red-400 mt-1 font-mono flex items-center gap-1';
      inputEl.parentElement.appendChild(errDiv);
    }
    errDiv.innerHTML = `<i class="fas fa-exclamation-circle text-[10px]"></i> ${message}`;
  }

  function clearErrors() {
    const inputs = [nameInput, emailInput, phoneInput, subjectInput, messageInput];
    inputs.forEach(input => {
      if (input) {
        input.classList.remove('border-red-500', 'bg-red-950/20');
        const errDiv = input.parentElement.querySelector('.error-msg');
        if (errDiv) errDiv.remove();
      }
    });
  }

  function showSuccessToast(message) {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-8 left-1/2 -translate-x-1/2 z-[200] glass-modal border border-emerald-500/50 bg-slate-900/95 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce';
    toast.innerHTML = `
      <div class="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center text-emerald-400">
        <i class="fas fa-check"></i>
      </div>
      <div>
        <h4 class="text-sm font-bold text-white">Message Delivered</h4>
        <p class="text-xs text-gray-300">${message}</p>
      </div>
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
      toast.classList.remove('animate-bounce');
      toast.classList.add('opacity-0', 'transition-opacity', 'duration-500');
      setTimeout(() => toast.remove(), 500);
    }, 4500);
  }
}
