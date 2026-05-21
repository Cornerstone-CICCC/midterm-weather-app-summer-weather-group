import { searchCities } from '../services/placekitApi';
import {
  getFavorites,
  addFavorite
} from '../utils/storage';

import type { FavoriteCity } from '../utils/storage';


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

function createStar(city: any) {
  const star = document.createElement('button');

  star.textContent = '⭐';

  star.style.marginLeft = '8px';
  star.style.cursor = 'pointer';

  star.addEventListener('click', () => {
    const favorite: FavoriteCity = {
      name: city.name,
      lat: city.lat,
      lng: city.lng,
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

      results.appendChild(item);
    });
  });
}

if (dropdown) {
  dropdown.addEventListener('change', (e) => {
    const target = e.target as HTMLSelectElement;

    if (!target.value) return;

    const city = JSON.parse(target.value);

    (window as any).updateWeather(
  city.lat,
  city.lng
);
  });
}

// INIT
renderFavorites();