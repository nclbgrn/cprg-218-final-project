const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=Cancun&appid=58e3f8364b021f968ae0720b303c2f01&units=metric";

fetch(weatherUrl)
  .then(res => res.json())
  .then(data => {
    const temp = Math.round(data.main.temp);
    const description = data.weather[0].description;
    document.getElementById('weather').textContent = `Cancun: ${temp}°C, ${description}`;
  })
  .catch(() => {
    document.getElementById('weather').textContent = 'Weather Not Available';
  });
