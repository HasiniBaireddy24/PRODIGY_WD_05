const apiKey = '5cb4c80ce7f6e7b218e4d26246efdf81';



document.getElementById('search-button').addEventListener('click', function () {
    const city = document.getElementById('search-input').value;
    if (city) {
        fetchWeatherData(city);
    }
});

function fetchWeatherData(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => updateWeatherUI(data))
        .catch(error => alert('City not found!'));
}

function updateWeatherUI(data) {
    document.getElementById('location').textContent = `${data.name}, ${data.sys.country}`;
    document.getElementById('weather-description').textContent = data.weather[0].description;
    document.getElementById('humidity').textContent = `${data.main.humidity}%`;
    document.getElementById('wind-speed').textContent = `${data.wind.speed} km/h`;
    document.getElementById('temp').textContent = `${data.main.temp}°C`;
    document.getElementById('min-temp').textContent = `${data.main.temp_min}°C`;
    document.getElementById('max-temp').textContent = `${data.main.temp_max}°C`;
    document.getElementById('weather-icon').querySelector('img').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}
