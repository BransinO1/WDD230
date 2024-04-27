// Retrieves Data regarding current year

// Function to get the current year and populate the copyright notice
function getCurrentYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').innerText = currentYear;
}

// Function to get the last modified date of the document and populate the "lastModified" paragraph
function getLastModifiedDate() {
    const lastModified = document.lastModified;
    document.getElementById('lastModified').innerText = `Last modified: ${lastModified}`;
}

// Call the functions when the page loads
window.onload = function() {
    getCurrentYear();
    getLastModifiedDate();
};
