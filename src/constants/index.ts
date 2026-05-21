import type { IsDay, WeatherCode, WeatherGroup } from "@/types/weather";

export const WEATHER_CODE_MAP = {
  0: 'Clear sky',
  1: 'Mainly clear',
  2: 'Partly cloudy',
  3: 'Overcast',
  45: 'Fog',
  48: 'Rime fog',
  51: 'Light drizzle',
  53: 'Moderate drizzle',
  55: 'Dense drizzle',
  61: 'Slight rain',
  63: 'Moderate rain',
  65: 'Heavy rain',
  71: 'Slight snow',
  73: 'Moderate snow',
  75: 'Heavy snow',
  77: 'Snow grains',
  80: 'Slight rain showers',
  81: 'Moderate rain showers',
  82: 'Violent rain showers',
  85: 'Slight snow showers',
  86: 'Heavy snow showers',
  95: 'Thunderstorm',
  96: 'Thunderstorm with slight hail',
  99: 'Thunderstorm with heavy hail',
} as const;

export const WEATHER_CODE_GROUPS: Record<WeatherGroup, WeatherCode[]> = {
  Clear: [0, 1],
  Cloudy: [2, 3],
  Fog: [45, 48],
  Rain: [51, 53, 55, 61, 63, 80, 81],
  'Heavy Rain': [65, 82],
  Snow: [71, 73, 75, 77, 85, 86],
  Thunderstorm: [95, 96, 99],
};

export const WEATHER_IMAGE_MAP: Record<WeatherGroup, Record<IsDay, string>> = {
  Clear: { 0: 'https://images.unsplash.com/photo-1553902001-149de4c1bd99?auto=format&fit=crop&w=600&q=80', 1: 'https://images.unsplash.com/photo-1777914467834-d473b279ccbb?auto=format&fit=crop&w=600&q=80' },
  Cloudy: { 0: 'https://images.unsplash.com/photo-1624477582148-35d5e4bae761?auto=format&fit=crop&w=600&q=80', 1: 'https://images.unsplash.com/photo-1766203695519-f5b060b72d54?auto=format&fit=crop&w=600&q=80' },
  Fog: { 0: 'https://images.unsplash.com/photo-1762580171794-370acfd39f06?auto=format&fit=crop&w=600&q=80', 1: 'https://plus.unsplash.com/premium_photo-1710795018299-d468b8094165?auto=format&fit=crop&w=600&q=80' },
  Rain: { 0: 'https://images.unsplash.com/photo-1527766833261-b09c3163a791?auto=format&fit=crop&w=600&q=80', 1: 'https://images.unsplash.com/photo-1428592953211-077101b2021b?auto=format&fit=crop&w=600&q=80' },
  'Heavy Rain': { 0: 'https://images.unsplash.com/photo-1716561687339-6bc33c203595?auto=format&fit=crop&w=600&q=80', 1: 'https://images.unsplash.com/photo-1620385019253-b051a26048ce?auto=format&fit=crop&w=600&q=80' },
  Snow: { 0: 'https://plus.unsplash.com/premium_photo-1685977494926-d1f8efd44c3c?auto=format&fit=crop&w=600&q=80', 1: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?auto=format&fit=crop&w=600&q=80' },
  Thunderstorm: { 0: 'https://images.unsplash.com/photo-1612998753552-828f550c3319?auto=format&fit=crop&w=600&q=80', 1: 'https://plus.unsplash.com/premium_photo-1725408051956-a6dc142169bd?auto=format&fit=crop&w=600&q=80' },
};
