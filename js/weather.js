// js/weather.js

const apiKey = 'YOUR_API_KEY'; // <-- Put your actual API key here
const city = 'Cancun';

document.addEventListener("DOMContentLoaded", () => {
  const weatherEl = document.getElementById("weather");

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then(response => {
      if (!response.ok) throw new Error("Weather unavailable");
      return response.json();
    })
    .then(data => {
      const temp = Math.round(data.main.temp);
      const icon = data.weather[0].icon;
      const description = data.weather[0].description;

      weatherEl.innerHTML = `
        <div class="weather-widget">
          <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}" />
          <div class="weather-info">
            <span>${temp}°C</span>
            <small>${city}</small>
          </div>
        </div>
      `;
    })
    .catch(() => {
      weatherEl.innerHTML = `<span>Weather unavailable 🌥️</span>`;
    });
});
