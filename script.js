const form = document.getElementById('sign-in-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.querySelector('.error-message');
const togglePassword = document.querySelector('.toggle-password');

// Function to toggle password visibility
function togglePasswordVisibility() {
  const passwordType = passwordInput.type;
  if (passwordType === 'password') {
    passwordInput.type = 'text';
    togglePassword.classList.add('active');
  } else {
    passwordInput.type = 'password';
    togglePassword.classList.remove('active');
  }
}

// Add event listener to toggle password icon
togglePassword.addEventListener('click', togglePasswordVisibility);

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Replace with your actual sign-in logic (e.g., API call)
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (username === '' || password === '') {
    errorMessage.textContent = 'Please enter username and password.';
    return;
  }

  // Simulate successful sign in (replace with actual validation)
  if (username === 'user' && password === 'password') {
    // Sign in successful! Redirect or display success message
    console.log('Sign in successful!');
  } else {
    errorMessage.textContent = 'Invalid username or password.';
  }
});
