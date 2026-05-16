import { searchCities } from '../services/placekitApi';

const input =
  document.querySelector<HTMLInputElement>('#city-search');

const results =
  document.querySelector<HTMLDivElement>('#results');

if (input && results) {

  input.addEventListener('input', async () => {

    const cities = await searchCities(input.value);

    results.innerHTML = '';

    cities.forEach((city) => {

      const item = document.createElement('p');

      item.textContent =
        `${city.name}, ${city.country}`;

      results.appendChild(item);
    });
  });
}