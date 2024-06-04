document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('banner');
    const closeBannerButton = document.getElementById('closeBanner');

    const currentDate = new Date();
    const currentDay = currentDate.getDay();

    // Check if the current day is Monday, Tuesday, or Wednesday (1, 2, or 3 respectively)
    if (currentDay >= 1 && currentDay <= 3) {
        banner.style.display = 'block';
    }

    // Add event listener to close the banner when the "Close" button is clicked
    closeBannerButton.addEventListener('click', () => {
        banner.style.display = 'none';
    });
});