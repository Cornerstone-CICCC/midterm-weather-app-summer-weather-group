import { getUserLocation } from '../services/geo';
import { getWeather } from '../services/weatherApi';

async function init() {
  const status = document.querySelector('#status');

  if (!status) {
    console.error('Status element not found');
    return;
  }

  try {
    const location = await getUserLocation();

    console.log('LOCATION:', location);

    const weather = await getWeather(
      location.latitude,
      location.longitude
    );

    console.log('WEATHER:', weather);

    status.innerHTML = `
        <p>🌡 Temperature: ${weather.current.temperature_2m}°C</p>
        <p>💨 Wind: ${weather.current.wind_speed_10m} km/h</p>
        <p>☁️ Code: ${weather.current.weather_code}</p>
        `;

  } catch (error) {
    console.error(error);

    status.textContent =
      'Failed to load weather';
  }
}

init();