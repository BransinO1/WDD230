// JavaScript to display last modified date
document.addEventListener('DOMContentLoaded', function() {
    var lastModified = new Date(document.lastModified);
    var formattedDate = lastModified.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    document.getElementById('lastModified').textContent = 'Last Modified: ' + formattedDate;
});
