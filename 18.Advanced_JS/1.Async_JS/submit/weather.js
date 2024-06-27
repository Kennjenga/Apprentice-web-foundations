let YOUR_API_KEY = "****";
// script.js
async function fetchWeatherData() {
  try {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Nairobi&appid=YOUR_API_KEY"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
}

async function displayWeatherData() {
  const weatherData = await fetchWeatherData();
  if (weatherData) {
    const weatherDiv = document.getElementById("weather-data");
    weatherDiv.innerHTML = `Current temperature in Nairobi: ${weatherData.main.temp}°C`;
  }
}

displayWeatherData();
