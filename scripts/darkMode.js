// Controls the Dark mode settings

// Select the dark mode button and the main element
const darkModeButton = document.getElementById('darkModeButton');
const mainElement = document.querySelector('main');

// Variable to track the current mode
let isDarkMode = false;

// Function to toggle dark mode styles
function toggleDarkMode() {
    if (isDarkMode) {
        mainElement.style.background = "#000";
        mainElement.style.color = "#fff";
        darkModeButton.textContent = "Light";
    } else {
        mainElement.style.background = "#eee";
        mainElement.style.color = "#000";
        darkModeButton.textContent = "Dark";
    }
    isDarkMode = !isDarkMode; // Toggle the mode
}

// Add event listener to toggle dark mode
darkModeButton.addEventListener('click', toggleDarkMode);

// Apply light mode styles initially
toggleDarkMode();