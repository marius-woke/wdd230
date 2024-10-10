document.addEventListener('DOMContentLoaded', function () {
    const calendar = document.getElementById('calendar');
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const currentDay = today.getDate();

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    // Create header with month and year
    const monthYearHeader = document.createElement('div');
    monthYearHeader.classList.add('header');
    monthYearHeader.textContent = `${months[currentMonth]} ${currentYear}`;
    calendar.appendChild(monthYearHeader);

    // Create day headers
    daysOfWeek.forEach(day => {
        const dayHeader = document.createElement('div');
        dayHeader.classList.add('header');
        dayHeader.textContent = day;
        calendar.appendChild(dayHeader);
    });

    // Get the first day of the month
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

    // Get the number of days in the current month
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Add empty slots for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
        const emptySlot = document.createElement('div');
        emptySlot.classList.add('day');
        calendar.appendChild(emptySlot);
    }

    // Add the days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.textContent = day;

        // Highlight the current day
        if (day === currentDay) {
            dayElement.classList.add('current-day');
        }

        calendar.appendChild(dayElement);
    }
});
