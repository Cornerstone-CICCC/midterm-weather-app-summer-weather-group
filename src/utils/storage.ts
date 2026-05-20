export type FavoriteCity = {
  name: string;
  lat: number;
  lng: number;
};

const KEY = 'favorite_cities';

export function getFavorites(): FavoriteCity[] {
  const data = localStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
}

export function saveFavorites(cities: FavoriteCity[]) {
  localStorage.setItem(KEY, JSON.stringify(cities));
}

export function addFavorite(city: FavoriteCity) {
  const current = getFavorites();

  const exists = current.some(
    (c) => c.name === city.name
  );

  if (exists) return current;

  const updated = [...current, city];

  saveFavorites(updated);

  return updated;
}