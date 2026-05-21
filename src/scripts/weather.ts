import { getUserLocation } from '@/services/geo';
import { getWeather } from '@/services/weatherApi';
import { WEATHER_CODE_MAP, WEATHER_CODE_GROUPS, WEATHER_IMAGE_MAP } from '@/constants';
import type { Location } from '@/types/location';
import type { WeatherCode, WeatherGroup } from '@/types/weather';
import { setText } from '@/utils/setText';

function getWeatherGroup(code: WeatherCode): WeatherGroup | null {
  const entry = Object.entries(WEATHER_CODE_GROUPS).find(([, codes]) => codes.includes(code));
  return entry ? (entry[0] as WeatherGroup) : null;
}

function setBackgroundImage(group: WeatherGroup, isDay: 0 | 1) {
  const card = document.querySelector<HTMLElement>('.current-weather');
  if (!card) return;
  const imageUrl = WEATHER_IMAGE_MAP[group][isDay];
  card.style.backgroundImage = `url(${imageUrl})`;
}

export async function updateWeather({ latitude, longitude, city }: Location) {
  try {
    const weather = await getWeather(latitude, longitude);
    const { current, hourly, daily } = weather;

    const now = new Date(current.time);
    const hourIndex = hourly.time.findIndex((t) => new Date(t) >= now);
    const index = hourIndex === -1 ? 0 : hourIndex;
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    setText('city-name', city ?? '--');
    setText('weather-time', timeStr);
    setText('temperature', `${current.temperature_2m}°C`);
    setText('temp-max', daily.temperature_2m_max[0] != null ? `H: ${daily.temperature_2m_max[0]}°C` : '--');
    setText('temp-min', daily.temperature_2m_min[0] != null ? `L: ${daily.temperature_2m_min[0]}°C` : '--');
    setText('condition', WEATHER_CODE_MAP[current.weather_code] ?? '--');
    setText('humidity', `${current.relative_humidity_2m}%`);
    setText('wind-speed', `${current.wind_speed_10m} km/h`);
    setText('precipitation', hourly.precipitation_probability[index] != null
      ? `${hourly.precipitation_probability[index]}%`
      : 'N/A'
    );
    setText('uv-index', hourly.uv_index[index] != null
      ? String(hourly.uv_index[index])
      : 'N/A'
    );

    const group = getWeatherGroup(current.weather_code);
    if (group) setBackgroundImage(group, current.is_day);

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
