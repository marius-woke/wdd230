const form = document.querySelector('form.custom-form');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const emailInput = document.getElementById('email');

// Regular expression for emails ending with @byui.edu
const emailPattern = /^[a-zA-Z0-9._%+-]+@byui\.edu$/;

form.addEventListener('submit', (e) => {
    let hasError = false;

    // Reset error classes
    [emailInput, password, confirmPassword].forEach(input => {
        input.classList.remove('error', 'valid');
    });

    // Validate email address
    if (!emailPattern.test(emailInput.value)) {
        hasError = true;
        alert("Please enter a valid email address ending with @byui.edu.");
        emailInput.classList.add('error');
        emailInput.focus();
    } else {
        emailInput.classList.add('valid');
    }

    // Validate password match
    if (password.value !== confirmPassword.value) {
        hasError = true;
        alert("Passwords do not match. Please try again.");
        password.classList.add('error');
        confirmPassword.classList.add('error');
        password.focus();
    } else {
        password.classList.add('valid');
        confirmPassword.classList.add('valid');
    }

    // Prevent form submission if there are errors
    if (hasError) {
        e.preventDefault();
    }
});
