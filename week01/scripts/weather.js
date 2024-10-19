const apiKey = 'bb11ec2e2f5d8e02a41b39d44e996d3b'; // Replace with your OpenWeather API key
const city = 'Rexburg'; // You can use any city
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Rexburg&appid=bb11ec2e2f5d8e02a41b39d44e996d3b&units=metric`;

async function fetchWeather() {
    try {
        const response = await fetch(apiUrl);
        const weatherData = await response.json();

        // Extract data
        const temp = weatherData.main.temp;
        const condition = weatherData.weather[0].description;
        const icon = weatherData.weather[0].icon;

        // Update HTML elements
        document.querySelector('.temperature').textContent = `${temp}°C`;
        document.querySelector('.condition').textContent = condition;
        document.querySelector('.weather-icon').src = `https://openweathermap.org/img/wn/${icon}.png`;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

fetchWeather();
