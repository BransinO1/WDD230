// Function to increment page visit counter
function incrementPageVisitCounter() {
    // Get current page visit count from localStorage, if exists, or set to 0
    let pageVisitCount = localStorage.getItem('pageVisitCount') || 0;

    // Increment page visit count
    pageVisitCount++;

    // Update the page visit count in localStorage
    localStorage.setItem('pageVisitCount', pageVisitCount);

    // Update the counter display on the page
    document.getElementById('pageVisitCounter').textContent = pageVisitCount;
}

// Increment page visit counter on page load
window.addEventListener('load', incrementPageVisitCounter);