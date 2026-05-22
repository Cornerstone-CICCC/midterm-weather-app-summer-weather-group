import type { OpenMeteoError } from '@/types/error';
import type { WeatherResponse } from '@/types/weather';

const BASE_URL = 'https://api.open-meteo.com/v1/forecast';

const CURRENT_PARAMS = [
  'temperature_2m',           // Air temperature at 2 meters above ground (°C)
  'relative_humidity_2m',     // Relative humidity at 2 meters above ground (%)
  'weather_code',             // Weather condition as a numeric WMO code
  'wind_speed_10m',           // Wind speed at 10 meters above ground (km/h)
  'is_day',                   // 1 if daytime, 0 if nighttime at the current time step
];

const HOURLY_PARAMS = [
  'temperature_2m',            // Temperature at 2 meters for hourly forecast (°C)
  'weather_code',              // Weather condition code for each hour
  'precipitation_probability', // Probability of precipitation with more than 0.1mm (%)
  'uv_index',                  // UV index at the surface, considering clouds
];

const DAILY_PARAMS = [
  'temperature_2m_max', // Maximum daily air temperature at 2 meters above ground (°C)
  'temperature_2m_min', // Minimum daily air temperature at 2 meters above ground (°C)
  'weather_code',       // Most severe weather code for the day
];

export async function getWeather(
  latitude: number,
  longitude: number
): Promise<WeatherResponse> {
  const url = new URL(BASE_URL);
  url.searchParams.append('latitude', String(latitude));
  url.searchParams.append('longitude', String(longitude));
  url.searchParams.append('current', CURRENT_PARAMS.join(','));
  url.searchParams.append('hourly', HOURLY_PARAMS.join(','));
  url.searchParams.append('daily', DAILY_PARAMS.join(','));
  url.searchParams.append('forecast_days', '5');
  url.searchParams.append('timezone', 'auto');

  const response = await fetch(url);

  if (!response.ok) {
    const errorData: OpenMeteoError = await response.json();
    throw new Error(errorData.reason);
  }

  return response.json();
}