import type { City, PlaceKitResponse } from '@/types/city'

const API_KEY = import.meta.env.PUBLIC_PLACEKIT_API_KEY as string;

export async function searchCities(
  query: string
): Promise<City[]> {

  if (!query.trim()) {
    return [];
  }

  const response = await fetch(
    'https://api.placekit.co/search',
    {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
        'x-placekit-api-key': API_KEY,
      },

      body: JSON.stringify({
        query,
        types: ['city'],
        maxResults: 5,
        language: 'en',
      }),
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch cities');
  }

  const data: PlaceKitResponse = await response.json()

  return data.results.map((city) => ({
    name: city.name,
    lat: city.lat,
    lng: city.lng,
    country: city.country,
    coordinates: city.coordinates,
  }));
}