import { getUserLocation } from '../services/geo';
import { getWeather } from '../services/weatherApi';

const status =
  document.querySelector('#weather-info');

async function updateWeather(
  latitude: number,
  longitude: number
) {

  if (!status) return;

  try {

    status.innerHTML =
      'Loading weather...';

    const weather = await getWeather(
      latitude,
      longitude
    );

    console.log('WEATHER:', weather);

    status.innerHTML = `
      <p>🌡 Temperature:
      ${weather.current.temperature_2m}°C</p>

      <p>💨 Wind:
      ${weather.current.wind_speed_10m} km/h</p>

      <p>☁️ Code:
      ${weather.current.weather_code}</p>
    `;

  } catch (error) {

    console.error(error);

    status.textContent =
      'Failed to load weather';
  }
}

async function init() {

  try {

    const location =
      await getUserLocation();

    console.log(
      'LOCATION:',
      location
    );

    await updateWeather(
      location.latitude,
      location.longitude
    );

  } catch (error) {

    console.error(error);
  }
}

init();

// ⭐ IMPORTANT
(window as any).updateWeather =
  updateWeather;