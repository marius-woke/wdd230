document.addEventListener("DOMContentLoaded", () => {
    const modifiedDateElement = document.getElementById("modifiedDate");
    const lastModified = document.lastModified;  // Get the last modified date of the document
    modifiedDateElement.textContent = lastModified;
});
document.addEventListener("DOMContentLoaded", function () {
    const lastVisit = localStorage.getItem('lastVisit');
    const currentVisit = new Date();

    if (lastVisit) {
        const lastVisitDate = new Date(parseInt(lastVisit));
        const daysDifference = Math.floor((currentVisit - lastVisitDate) / (1000 * 60 * 60 * 24));

        let message = '';
        if (daysDifference === 0) {
            message = "Back so soon? Awesome!";
        } else if (daysDifference === 1) {
            message = `You last visited 1 day ago.`;
        } else {
            message = `You last visited ${daysDifference} days ago.`;
        }
        alert(message);
    } else {
        alert("Welcome! Let us know if you have any questions.");
    }

    localStorage.setItem('lastVisit', Date.now());
});
