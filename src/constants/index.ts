import type { IsDay, WeatherCode, WeatherGroup } from '@/types/weather'

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
} as const

export const WEATHER_ICON_MAP: Record<WeatherCode, Record<IsDay, string>> = {
  0: { 1: 'clear-day', 0: 'clear-night' }, // Clear sky
  1: { 1: 'clear-day', 0: 'clear-night' }, // Mainly clear
  2: { 1: 'partly-cloudy-day', 0: 'partly-cloudy-night' }, // Partly cloudy
  3: { 1: 'overcast-day', 0: 'overcast-night' }, // Overcast
  45: { 1: 'fog-day', 0: 'fog-night' }, // Fog
  48: { 1: 'fog-day', 0: 'fog-night' }, // Rime fog
  51: { 1: 'partly-cloudy-day-drizzle', 0: 'partly-cloudy-night-drizzle' }, // Light drizzle
  53: { 1: 'partly-cloudy-day-drizzle', 0: 'partly-cloudy-night-drizzle' }, // Moderate drizzle
  55: { 1: 'drizzle', 0: 'drizzle' }, // Dense drizzle
  61: { 1: 'partly-cloudy-day-rain', 0: 'partly-cloudy-night-rain' }, // Slight rain
  63: { 1: 'rain', 0: 'rain' }, // Moderate rain
  65: { 1: 'overcast-rain', 0: 'overcast-rain' }, // Heavy rain
  71: { 1: 'partly-cloudy-day-snow', 0: 'partly-cloudy-night-snow' }, // Slight snow
  73: { 1: 'snow', 0: 'snow' }, // Moderate snow
  75: { 1: 'overcast-snow', 0: 'overcast-snow' }, // Heavy snow
  77: { 1: 'overcast-snow', 0: 'overcast-snow' }, // Snow grains
  80: { 1: 'partly-cloudy-day-rain', 0: 'partly-cloudy-night-rain' }, // Slight rain showers
  81: { 1: 'overcast-day-rain', 0: 'overcast-night-rain' }, // Moderate rain showers
  82: { 1: 'extreme-day-rain', 0: 'extreme-night-rain' }, // Violent rain showers
  85: { 1: 'partly-cloudy-day-snow', 0: 'partly-cloudy-night-snow' }, // Slight snow showers
  86: { 1: 'extreme-day-snow', 0: 'extreme-night-snow' }, // Heavy snow showers
  95: { 1: 'thunderstorms-day-rain', 0: 'thunderstorms-night-rain' }, // Thunderstorm
  96: { 1: 'thunderstorms-day-hail', 0: 'thunderstorms-night-hail' }, // Thunderstorm with slight hail
  99: { 1: 'thunderstorms-overcast-day', 0: 'thunderstorms-overcast-night' }, // Thunderstorm with heavy hail
} as const

export const WEATHER_CODE_GROUPS: Record<WeatherGroup, WeatherCode[]> = {
  'Clear sky': [0],
  'Mainly clear': [1],
  'Partly cloudy': [2],
  Overcast: [3],
  Fog: [45, 48],
  Drizzle: [51, 53, 55],
  Rain: [61, 63, 65],
  Snow: [71, 73, 75, 77],
  Showers: [80, 81, 82, 85, 86],
  Thunderstorm: [95, 96, 99],
}

export const WEATHER_IMAGE_MAP: Record<WeatherGroup, Record<IsDay, string>> = {
  'Clear sky': {
    0: 'https://images.unsplash.com/photo-1477840539360-4a1d23071046?auto=format&fit=crop&w=600&q=80',
    1: 'https://plus.unsplash.com/premium_photo-1733306531071-087c077e1502?auto=format&fit=crop&w=600&q=80',
  },
  'Mainly clear': {
    0: 'https://images.unsplash.com/photo-1628725022723-00a47a683320?auto=format&fit=crop&w=600&q=80',
    1: 'https://images.unsplash.com/photo-1615286628718-4a4c8924d0eb?auto=format&fit=crop&w=600&q=80',
  },
  'Partly cloudy': {
    0: 'https://images.unsplash.com/photo-1628725022723-00a47a683320?auto=format&fit=crop&w=600&q=80',
    1: 'https://images.unsplash.com/photo-1777914467834-d473b279ccbb?auto=format&fit=crop&w=600&q=80',
  },
  Overcast: {
    0: 'https://images.unsplash.com/photo-1624477582148-35d5e4bae761?auto=format&fit=crop&w=600&q=80',
    1: 'https://images.unsplash.com/photo-1499956827185-0d63ee78a910?auto=format&fit=crop&w=600&q=80',
  },
  Fog: {
    0: 'https://images.unsplash.com/photo-1634461909815-fbfe910c162c?auto=format&fit=crop&w=600&q=80',
    1: 'https://images.unsplash.com/photo-1487621167305-5d248087c724?auto=format&fit=crop&w=600&q=80',
  },
  Drizzle: {
    0: 'https://images.unsplash.com/photo-1527766833261-b09c3163a791?auto=format&fit=crop&w=600&q=80',
    1: 'https://images.unsplash.com/photo-1576234699886-7eb7f11aecb7?auto=format&fit=crop&w=600&q=80',
  },
  Rain: {
    0: 'https://images.unsplash.com/photo-1527766833261-b09c3163a791?auto=format&fit=crop&w=600&q=80',
    1: 'https://images.unsplash.com/photo-1428592953211-077101b2021b?auto=format&fit=crop&w=600&q=80',
  },
  Snow: {
    0: 'https://plus.unsplash.com/premium_photo-1685977494926-d1f8efd44c3c?auto=format&fit=crop&w=600&q=80',
    1: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?auto=format&fit=crop&w=600&q=80',
  },
  Showers: {
    0: 'https://images.unsplash.com/photo-1470432581262-e7880e8fe79a?auto=format&fit=crop&w=600&q=80',
    1: 'https://images.unsplash.com/photo-1672442665593-d69f0314adb1?auto=format&fit=crop&w=600&q=80',
  },
  Thunderstorm: {
    0: 'https://images.unsplash.com/photo-1612998753552-828f550c3319?auto=format&fit=crop&w=600&q=80',
    1: 'https://plus.unsplash.com/premium_photo-1725408051956-a6dc142169bd?auto=format&fit=crop&w=600&q=80',
  },
}
