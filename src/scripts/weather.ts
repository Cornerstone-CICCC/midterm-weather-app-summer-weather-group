import { getUserLocation } from '@/services/geo';
import { getWeather } from '@/services/weatherApi';
import { WEATHER_CODE_MAP } from '@/constants';
import type { Location } from '@/types/location';
import { setText } from '@/utils/setText';

export async function updateWeather({ latitude, longitude, city }: Location) {
  try {
    const weather = await getWeather(latitude, longitude);
    const { current, hourly } = weather;

    const now = new Date(current.time);
    const hourIndex = hourly.time.findIndex((t) => new Date(t) >= now);
    const i = hourIndex === -1 ? 0 : hourIndex;

    setText('city-name', city ?? '--');
    setText('temperature', `${current.temperature_2m}°C`);
    setText('condition', WEATHER_CODE_MAP[current.weather_code] ?? '--');
    setText('feels-like', `${current.apparent_temperature}°C`);
    setText('humidity', `${current.relative_humidity_2m}%`);
    setText('wind-speed', `${current.wind_speed_10m} km/h`);
    setText('precipitation', hourly.precipitation_probability[i] != null
      ? `${hourly.precipitation_probability[i]}%`
      : 'N/A'
    );
    setText('uv-index', hourly.uv_index[i] != null
      ? String(hourly.uv_index[i])
      : 'N/A'
    );
  } catch (error) {
    console.error(error);
    setText('condition', 'Failed to load weather');
  }
}

async function init() {
  try {
    const location = await getUserLocation();
    await updateWeather(location);
  } catch (error) {
    console.error(error);
  }
}

init();

// ⭐ IMPORTANT | Expose the updateWeather function to the global scope
(window as unknown as { updateWeather: typeof updateWeather }).updateWeather = updateWeather;
