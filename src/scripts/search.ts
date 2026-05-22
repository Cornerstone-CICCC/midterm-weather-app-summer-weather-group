import { searchCities } from '@/services/placekitApi';
import {
  getFavorites,
  addFavorite
} from '@/utils/storage';
import type { City } from '@/types/city';
import type { Location } from '@/types/location';

const input =
  document.querySelector<HTMLInputElement>('#city-search');

const results =
  document.querySelector<HTMLDivElement>('#results');

const dropdown =
  document.querySelector<HTMLSelectElement>(
    '#favorites-dropdown'
  );

function renderFavorites() {
  if (!dropdown) return;

  const favorites = getFavorites();

  dropdown.innerHTML =
    `<option value="">Favorites</option>`;

  favorites.forEach((city) => {
    const option = document.createElement('option');

    option.value = JSON.stringify(city);
    option.textContent = city.name;

    dropdown.appendChild(option);
  });
}

function createStar(city: City) {
  const star = document.createElement('button');

  star.textContent = '⭐';

  star.style.marginLeft = '8px';
  star.style.cursor = 'pointer';

  star.addEventListener('click', () => {
    const favorite: City = {
      name: city.name,
      lat: city.lat,
      lng: city.lng,
      country: city.country,
      coordinates: city.coordinates,
    };

    addFavorite(favorite);
    renderFavorites();
  });

  return star;
}

if (input && results) {
  input.addEventListener('input', async () => {
    const cities = await searchCities(input.value);

    results.innerHTML = '';

    cities.forEach((city) => {
      const item = document.createElement('div');

      item.textContent =
        `${city.name}, ${city.country}`;

      const star = createStar(city);

      item.appendChild(star);

      item.addEventListener('click', () => {
        (window as unknown as { updateWeather: ({ latitude, longitude, city, country }: Location) => Promise<void> }).updateWeather(
          { latitude: city.lat, longitude: city.lng, city: city.name, country: city.country }
        );
      });

      results.appendChild(item);
    });
  });
}

if (dropdown) {
  dropdown.addEventListener('change', (e) => {
    const target = e.target as HTMLSelectElement;

    if (!target.value) return;

    const city: City = JSON.parse(target.value);

    (window as unknown as { updateWeather: ({ latitude, longitude, city, country }: Location) => Promise<void> }).updateWeather(
      { latitude: city.lat, longitude: city.lng, city: city.name, country: city.country }
    );
  });
}

// INIT
renderFavorites();