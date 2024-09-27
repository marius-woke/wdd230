document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('modifiedDate').textContent = document.lastModified;
document.addEventListener('DOMContentLoaded', function () {
    const hamMenu = document.querySelector('.ham-menu');
    const navLinks = document.querySelector('.nav-links');

    hamMenu.addEventListener('click', function () {
        navLinks.classList.toggle('show');
        hamMenu.classList.toggle('active');
    });
});