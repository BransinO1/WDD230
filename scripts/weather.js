// Define the latitude and longitude coordinates for Boise, Idaho
const boiseLat = 43.6150;
const boiseLon = -116.2023;

// Use your personal API key from OpenWeatherMap
const apiKey = '0695d1cce86569e49e6ab9095141e40b';

// Construct the API request URLs
const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${boiseLat}&lon=${boiseLon}&appid=${apiKey}&units=imperial`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${boiseLat}&lon=${boiseLon}&appid=${apiKey}&units=imperial`;

// Map icon codes to icon image URLs
const iconBaseUrl = 'http://openweathermap.org/img/wn/';
const mapIconToUrl = (iconCode) => `${iconBaseUrl}${iconCode}.png`;

// Function to update the weather information in the "Information" section
const updateWeatherInfo = (weatherData, forecastData) => {
    // Extract relevant current weather information
    const temperature = weatherData.main.temp;
    const description = weatherData.weather[0].description;
    const iconCode = weatherData.weather[0].icon;
    const iconUrl = mapIconToUrl(iconCode);

    // Extract forecast information
    const forecast = forecastData.list.filter((item, index) => index % 8 === 0).slice(0, 3); // Get forecast for the next three days at midday

    // Update the HTML content with the weather information
    const infoSection = document.getElementById('weatherInfo');
    infoSection.innerHTML = `
        <h2>Weather Information</h2>
        <div class="weather-info">
        <img src="${iconUrl}" alt="Weather Icon">
        <div>
        <p>Current Weather</p>
        <p>Temperature: ${temperature} °F</p>
            <p>Description: ${description}</p>
        </div>
        </div>

        <h3>3-Day Forecast</h3>
        <div class="forecast">
            ${forecast.map(day => {
                const date = new Date(day.dt * 1000).toLocaleDateString();
                const temp = day.main.temp;
                const forecastDescription = day.weather[0].description;
                const forecastIcon = mapIconToUrl(day.weather[0].icon);
                return `
                    <div class="forecast-day">
                        <p>${date}</p>
                        <div class="forecast-info">
                            <img src="${forecastIcon}" alt="Forecast Icon">
                            <div>
                            <p>Temperature: ${temp} °F</p>
                                <p>Description: ${forecastDescription}</p>
                            </div>
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
};

// Fetch current weather data
fetch(currentWeatherUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(currentWeatherData => {
        // Fetch forecast data
        fetch(forecastUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(forecastData => {
                // Update the weather information in the HTML
                updateWeatherInfo(currentWeatherData, forecastData);
            })
            .catch(error => {
                console.error('There was a problem with the fetch request for forecast data:', error);
            });
    })
    .catch(error => {
        console.error('There was a problem with the fetch request for current weather data:', error);
    });