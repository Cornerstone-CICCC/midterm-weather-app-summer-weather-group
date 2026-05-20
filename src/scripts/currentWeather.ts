import { getWeather } from '@/services/weatherApi';
import { WEATHER_CODE_MAP } from '@/constants';
import type { CurrentWeatherData } from '@/types/weather';

export async function fetchCurrentWeather(
  latitude: number,
  longitude: number
): Promise<CurrentWeatherData> {
  const data = await getWeather(latitude, longitude);
  const { current, hourly } = data;

  const now = new Date(current.time);
  const currentHourIndex = hourly.time.findIndex((t) => new Date(t) >= now);
  const index = currentHourIndex === -1 ? 0 : currentHourIndex;

  return {
    temperature: current.temperature_2m,
    feelsLike: current.apparent_temperature,
    humidity: current.relative_humidity_2m,
    condition: WEATHER_CODE_MAP[current.weather_code] ?? 'Unknown',
    windSpeed: current.wind_speed_10m,
    isDay: current.is_day === 1,
    precipitationProbability: hourly.precipitation_probability[index],
    uvIndex: hourly.uv_index[index],
  };
}
