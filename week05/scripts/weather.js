// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// Define the URL for the OpenWeatherMap API
const url = 'https://api.openweathermap.org/data/2.5/weather';

// Define the query parameters
const params = new URLSearchParams({
  lat: 49.75,
  lon: 6.64,
  units: 'imperial',
  appid: '0695d1cce86569e49e6ab9095141e40b'
});

// Define an asynchronous function named "apiFetch()"
const apiFetch = async () => {
  try {
    // Fetch weather data from the API
    const response = await fetch(`${url}?${params}`);
    
    // Check if the response is successful
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    // Parse the JSON response
    const data = await response.json();
    
    // Output the weather data to the console for testing
    console.log(data);

    // Call the displayResults function with the retrieved data
    displayResults(data);
  } catch (error) {
    // Handle errors
    console.error('There was a problem with the fetch request:', error);
  }
};

// Define a function to display the weather results
const displayResults = (data) => {
  // Extract relevant weather information
  const temperature = data.main.temp;
  const description = data.weather[0].description;
  const iconCode = data.weather[0].icon;

  // Update the HTML content with the weather information
  currentTemp.textContent = `${temperature} °F`;
  captionDesc.textContent = description;
  weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}.png`;
  weatherIcon.alt = description;
};

// Invoke the apiFetch function to fetch weather data
apiFetch();