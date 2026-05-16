import type { WeatherData } from '../types/weather';

const BASE_URL = '';

export async function getWeather(
  latitude: number,
  longitude: number
): Promise<WeatherData> {
  const response = await fetch(
    `${BASE_URL}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code,wind_speed_10m&timezone=auto`
  );

  if (!response.ok) {
    throw new Error('Weather fetch failed');
  }

  return response.json();
}