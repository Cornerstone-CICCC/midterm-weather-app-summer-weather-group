import type { IsDay, WeatherGroup } from '@/types/weather'

export const WEATHER_IMAGE_MAP: Record<WeatherGroup, Record<IsDay, string>> = {
  'Clear sky': {
    0: 'https://images.unsplash.com/photo-1477840539360-4a1d23071046?auto=format&fit=crop&w=1440&q=80',
    1: 'https://images.unsplash.com/photo-1558418294-9da149757efe?auto=format&fit=crop&w=1440&q=80',
  },
  'Mainly clear': {
    0: 'https://images.unsplash.com/photo-1628725022723-00a47a683320?auto=format&fit=crop&w=1440&q=80',
    1: 'https://images.unsplash.com/photo-1615286628718-4a4c8924d0eb?auto=format&fit=crop&w=1440&q=80',
  },
  'Partly cloudy': {
    0: 'https://images.unsplash.com/photo-1628725022723-00a47a683320?auto=format&fit=crop&w=1440&q=80',
    1: 'https://images.unsplash.com/photo-1777914467834-d473b279ccbb?auto=format&fit=crop&w=1440&q=80',
  },
  'Overcast': {
    0: 'https://images.unsplash.com/photo-1624477582148-35d5e4bae761?auto=format&fit=crop&w=1440&q=80',
    1: 'https://images.unsplash.com/photo-1499956827185-0d63ee78a910?auto=format&fit=crop&w=1440&q=80',
  },
  'Fog': {
    0: 'https://images.unsplash.com/photo-1634461909815-fbfe910c162c?auto=format&fit=crop&w=1440&q=80',
    1: 'https://images.unsplash.com/photo-1487621167305-5d248087c724?auto=format&fit=crop&w=1440&q=80',
  },
  'Drizzle': {
    0: 'https://images.unsplash.com/photo-1527766833261-b09c3163a791?auto=format&fit=crop&w=1440&q=80',
    1: 'https://images.unsplash.com/photo-1576234699886-7eb7f11aecb7?auto=format&fit=crop&w=1440&q=80',
  },
  'Rain': {
    0: 'https://images.unsplash.com/photo-1527766833261-b09c3163a791?auto=format&fit=crop&w=1440&q=80',
    1: 'https://images.unsplash.com/photo-1428592953211-077101b2021b?auto=format&fit=crop&w=1440&q=80',
  },
  'Snow': {
    0: 'https://plus.unsplash.com/premium_photo-1685977494926-d1f8efd44c3c?auto=format&fit=crop&w=1440&q=80',
    1: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?auto=format&fit=crop&w=1440&q=80',
  },
  'Showers': {
    0: 'https://images.unsplash.com/photo-1470432581262-e7880e8fe79a?auto=format&fit=crop&w=1440&q=80',
    1: 'https://images.unsplash.com/photo-1672442665593-d69f0314adb1?auto=format&fit=crop&w=1440&q=80',
  },
  'Thunderstorm': {
    0: 'https://images.unsplash.com/photo-1612998753552-828f550c3319?auto=format&fit=crop&w=1440&q=80',
    1: 'https://images.unsplash.com/photo-1559571773-6271bd8fe553?auto=format&fit=crop&w=1440&q=80',
  },
}
