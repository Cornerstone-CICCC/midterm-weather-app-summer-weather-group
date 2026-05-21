import type { Location } from '../types/location';

export function getUserLocation(): Promise<Location> {
  return new Promise((resolve) => {
    if (!navigator.geolocation) {
      resolve({
        latitude: 49.2827,
        longitude: -123.1207,
        city: 'Vancouver',
      });

      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      () => {
        resolve({
          latitude: 49.2827,
          longitude: -123.1207,
          city: 'Vancouver',
        });
      }
    );
  });
}