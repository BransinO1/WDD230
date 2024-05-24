// Define the latitude and longitude coordinates for Boise, Idaho
const boiseLat = 43.6150;
const boiseLon = -116.2023;

// Construct the API request URL with the latitude, longitude, and your API key
const apiKey = '0695d1cce86569e49e6ab9095141e40b'; // Use my personal API key from the website/account
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${boiseLat}&lon=${boiseLon}&appid=${apiKey}&units=imperial`;

// Map icon codes to icon image URLs
const iconBaseUrl = 'http://openweathermap.org/img/wn/';
const mapIconToUrl = (iconCode) => `${iconBaseUrl}${iconCode}.png`;

// Function to update the weather information in the "Information" section
const updateWeatherInfo = (weatherData) => {
    // Extract relevant weather information
    const temperature = weatherData.main.temp;
    const description = weatherData.weather[0].description;
    const iconCode = weatherData.weather[0].icon;

    // Map the icon code to the icon image URL
    const iconUrl = mapIconToUrl(iconCode);

    // Update the HTML content with the weather information
    const infoSection = document.getElementById('weatherInfo');
    infoSection.innerHTML = `
        <h2>Weather Information</h2>
        <div class="weather-info">
            <img src="${iconUrl}" alt="Weather Icon">
            <p>Temperature: ${temperature} °F</p>
        </div>
        <p>Description: ${description}</p>
    `;
};

// Make a fetch request to the OpenWeatherMap API
fetch(apiUrl)
    .then(response => {
        // Check if the request was successful (status code 200)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // Parse the JSON response
        return response.json();
    })
    .then(data => {
        // Update the weather information in the HTML
        updateWeatherInfo(data);
    })
    .catch(error => {
        // Handle any errors that occurred during the fetch request
        console.error('There was a problem with the fetch request:', error);
    });
