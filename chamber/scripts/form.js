const form = document.querySelector('form.custom-form');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const emailInput = document.getElementById('email');

// Regular expression for emails ending with @byui.edu
const emailPattern = /^[a-zA-Z0-9._%+-]+@byui\.edu$/;

form.addEventListener('submit', (e) => {
    let hasError = false;

    // Validate email address
    if (!emailPattern.test(emailInput.value)) {
        hasError = true;
        alert("Please enter a valid email address from the byui.edu domain.");
        emailInput.focus();
        emailInput.classList.add('error'); // Add error class to highlight the field
    } else {
        emailInput.classList.remove('error'); // Remove error class if valid
    }

    // Validate password confirmation
    if (password.value !== confirmPassword.value) {
        hasError = true;
        alert("Passwords do not match. Please try again.");
        password.value = '';
        confirmPassword.value = '';
        password.focus();
        password.classList.add('error'); // Add error class to both password fields
        confirmPassword.classList.add('error');
    } else {
        password.classList.remove('error'); // Remove error class if passwords match
        confirmPassword.classList.remove('error');
    }

    // Prevent form submission if there are errors
    if (hasError) {
        e.preventDefault();
    }
});
