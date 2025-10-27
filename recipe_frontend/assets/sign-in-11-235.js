(function () {
  const screen = document.getElementById('screen-11-235');
  if (!screen) return;

  const form = screen.querySelector('#sign-in-form');
  const inputs = screen.querySelectorAll('.field .input');
  const googleBtn = screen.querySelector('.social.google');
  const facebookBtn = screen.querySelector('.social.facebook');

  // Prevent default submission for this static asset
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // Simple validation hint
      const email = form.querySelector('#email');
      const pwd = form.querySelector('#password');
      if (email && pwd && (!email.value || !pwd.value)) {
        console.log('Please fill in email and password.');
      } else {
        console.log('Submitting sign-in...');
      }
    });
  }

  // Focus style toggle
  inputs.forEach(function (input) {
    const field = input.closest('.field');
    if (!field) return;
    input.addEventListener('focus', function () {
      field.classList.add('focused');
    });
    input.addEventListener('blur', function () {
      field.classList.remove('focused');
    });
  });

  // Social handlers (placeholders)
  if (googleBtn) {
    googleBtn.addEventListener('click', function () {
      console.log('Google sign-in clicked');
    });
  }
  if (facebookBtn) {
    facebookBtn.addEventListener('click', function () {
      console.log('Facebook sign-in clicked');
    });
  }

  // Helper links
  const forgot = screen.querySelector('.forgot-password .link');
  if (forgot) {
    forgot.addEventListener('click', function () {
      console.log('Forgot Password clicked');
    });
  }
  const signup = screen.querySelector('.helper-text .signup-link');
  if (signup) {
    signup.addEventListener('click', function () {
      console.log('Sign up clicked');
    });
  }
})();
