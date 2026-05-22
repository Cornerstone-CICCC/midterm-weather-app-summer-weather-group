import type { City } from "@/types/city";

const KEY = 'favorite_cities';

export function getFavorites(): City[] {
  const data = localStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
}

export function saveFavorites(cities: City[]) {
  localStorage.setItem(KEY, JSON.stringify(cities));
}

export function addFavorite(city: City) {
  const current = getFavorites();

  const exists = current.some(
    (c) => c.name === city.name
  );

  if (exists) return current;

  const updated = [...current, city];

  saveFavorites(updated);

  return updated;
}

export function hasFavorite(coordinates: string): boolean {
  const current = getFavorites();
  return current.some((c) => c.coordinates === coordinates);
}

export function removeFavorite(coordinates: string): void {
  const current = getFavorites();
  const updated = current.filter((c) => c.coordinates !== coordinates);
  if (!updated.length) {
    localStorage.removeItem(KEY);
    return;
  };
  saveFavorites(updated);
}