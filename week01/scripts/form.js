const form = document.querySelector('form.custom-form');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const emailInput = document.getElementById('email');
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const phoneInput = document.getElementById('phone');

// Regular expression for emails ending with @byui.edu
const emailPattern = /^[a-zA-Z0-9._%+-]+@byui\.edu$/;
// Regular expression for valid first and last names (letters only, at least 2 characters)
const namePattern = /^[a-zA-Z]{2,}$/;
// Regular expression for valid phone numbers (simple example: 10 digits)
const phonePattern = /^\d{10}$/; // Adjust this as needed for your specific format

form.addEventListener('submit', (e) => {
    let hasError = false;

    // Validate email address
    if (!emailPattern.test(emailInput.value)) {
        hasError = true;
        alert("Please enter a valid email address from the byui.edu domain.");
        emailInput.focus();
        emailInput.classList.add('error'); // Add error class to highlight the field
        emailInput.classList.remove('valid'); // Remove valid class if there's an error
    } else {
        emailInput.classList.remove('error'); // Remove error class if valid
        emailInput.classList.add('valid'); // Add valid class if valid
    }

    // Validate first name
    if (!namePattern.test(firstNameInput.value)) {
        hasError = true;
        alert("First name must be at least 2 characters long and contain only letters.");
        firstNameInput.focus();
        firstNameInput.classList.add('error'); // Add error class to highlight the field
        firstNameInput.classList.remove('valid'); // Remove valid class if there's an error
    } else {
        firstNameInput.classList.remove('error'); // Remove error class if valid
        firstNameInput.classList.add('valid'); // Add valid class if valid
    }

    // Validate last name
    if (!namePattern.test(lastNameInput.value)) {
        hasError = true;
        alert("Last name must be at least 2 characters long and contain only letters.");
        lastNameInput.focus();
        lastNameInput.classList.add('error'); // Add error class to highlight the field
        lastNameInput.classList.remove('valid'); // Remove valid class if there's an error
    } else {
        lastNameInput.classList.remove('error'); // Remove error class if valid
        lastNameInput.classList.add('valid'); // Add valid class if valid
    }

    // Validate phone number
    if (!phonePattern.test(phoneInput.value)) {
        hasError = true;
        alert("Please enter a valid phone number (10 digits).");
        phoneInput.focus();
        phoneInput.classList.add('error'); // Add error class to highlight the field
        phoneInput.classList.remove('valid'); // Remove valid class if there's an error
    } else {
        phoneInput.classList.remove('error'); // Remove error class if valid
        phoneInput.classList.add('valid'); // Add valid class if valid
    }

    // Validate password confirmation
    if (password && confirmPassword) { // Ensure password fields exist
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
    }

    // Prevent form submission if there are errors
    if (hasError) {
        e.preventDefault();
    }
});
