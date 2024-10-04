document.addEventListener("DOMContentLoaded", () => {
    const modifiedDateElement = document.getElementById("modifiedDate");
    const lastModified = document.lastModified;  // Get the last modified date of the document
    modifiedDateElement.textContent = lastModified;
});
