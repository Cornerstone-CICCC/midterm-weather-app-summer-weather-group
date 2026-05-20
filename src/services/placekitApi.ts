export type CityResult = {
  name: string;
  lat: number;
  lng: number;
  country: string;
};

const API_KEY = '';

export async function searchCities(
  query: string
): Promise<CityResult[]> {

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

  const data = await response.json();

  return data.results.map((city: any) => ({
    name: city.name,
    lat: city.lat,
    lng: city.lng,
    country: city.country,
  }));
}