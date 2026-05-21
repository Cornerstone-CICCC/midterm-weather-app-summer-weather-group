export type WeatherCode =
  | 0 | 1 | 2 | 3
  | 45 | 48
  | 51 | 53 | 55
  | 61 | 63 | 65
  | 71 | 73 | 75 | 77
  | 80 | 81 | 82 | 85 | 86
  | 95 | 96 | 99

export type IsDay = 0 | 1

export type WeatherGroup =
  | 'Clear sky'
  | 'Mainly clear'
  | 'Partly cloudy'
  | 'Overcast'
  | 'Fog'
  | 'Drizzle'
  | 'Rain'
  | 'Snow'
  | 'Showers'
  | 'Thunderstorm'

type CurrentUnits = {
  time: string                                    // Format of the time value (e.g. iso8601)
  interval: string                                // Unit of the interval value (e.g. seconds)
  temperature_2m: string                          // Unit of the temperature value (e.g. °C)
  relative_humidity_2m: string                    // Unit of the relative humidity value (e.g. %)
  weather_code: string                            // Unit of the weather code value (e.g. wmo code)
  wind_speed_10m: string                          // Unit of the wind speed value (e.g. km/h)
  is_day: string                                  // Unit of the is_day value
}

type HourlyUnits = {
  time: string                                    // Format of the time value (e.g. iso8601)
  precipitation_probability: string               // Unit of the precipitation probability value (e.g. %)
  uv_index: string                                // Unit of the UV index value
}

export type WeatherResponse = {
  latitude: number                                // Geographical WGS84 coordinates of the location
  longitude: number                               // Geographical WGS84 coordinates of the location
  elevation: number                               // The elevation from a 90 meter digital elevation model
  generationtime_ms: number                       // Generation time of the weather forecast in milliseconds
  utc_offset_seconds: number                      // Applied timezone offset from the &timezone= parameter
  timezone: string                                // Timezone identifier (e.g. Europe/Berlin)
  timezone_abbreviation: string                   // Timezone abbreviation (e.g. CEST)

  current_units: CurrentUnits
  current: {
    time: string                                  // The moment at which the data is valid (ISO8601)
    interval: number                              // Duration in seconds used for calculating backward-looking sums or averages
    temperature_2m: number                        // Air temperature at 2 meters above ground (°C)
    relative_humidity_2m: number                  // Relative humidity at 2 meters above ground (%)
    weather_code: WeatherCode                     // Weather condition as a numeric WMO code
    wind_speed_10m: number                        // Wind speed at 10 meters above ground (km/h)
    is_day: IsDay                                 // 1 if daytime, 0 if nighttime at the current time step
  }

  hourly_units: HourlyUnits
  hourly: {
    time: string[]                                // Array of ISO8601 timestamps for each hourly data point
    precipitation_probability: (number | null)[]  // Probability of precipitation with more than 0.1mm per hour (%), null if unavailable
    uv_index: (number | null)[]                   // UV index at the surface, considering clouds, null if unavailable
  }

  daily_units: {
    time: string
    temperature_2m_max: string
    temperature_2m_min: string
  }
  daily: {
    time: string[]                                // Array of dates (YYYY-MM-DD) for each daily data point
    temperature_2m_max: (number | null)[]         // Maximum daily temperature at 2 meters (°C)
    temperature_2m_min: (number | null)[]         // Minimum daily temperature at 2 meters (°C)
  }
}
