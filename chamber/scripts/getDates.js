// Retrieves Data regarding current year

// Function to get the last modified date of the document and populate the "lastModified" paragraph
function getLastModifiedDate() {
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;
}

// Call the function when the page loads
window.onload = getLastModifiedDate;