export interface WeatherDetail {
  description: string;
  icon: string;
}

/**
 * Maps Open-Meteo WMO weather codes to descriptions and Material Icons.
 */
export function getWeatherDetail(code: number): WeatherDetail {
  const weatherMap: { [key: number]: WeatherDetail } = {
    0: { description: 'Clear sky', icon: 'wb_sunny' },
    1: { description: 'Mainly clear', icon: 'wb_cloudy' },
    2: { description: 'Partly cloudy', icon: 'partly_cloudy_day' },
    3: { description: 'Overcast', icon: 'cloud' },
    45: { description: 'Fog', icon: 'blur_on' },
    48: { description: 'Depositing rime fog', icon: 'ac_unit' },
    51: { description: 'Drizzle: Light', icon: 'grain' },
    53: { description: 'Drizzle: Moderate', icon: 'grain' },
    55: { description: 'Drizzle: Dense', icon: 'grain' },
    61: { description: 'Rain: Slight', icon: 'umbrella' },
    63: { description: 'Rain: Moderate', icon: 'water_drop' },
    65: { description: 'Rain: Heavy', icon: 'tsunami' },
    66: { description: 'Freezing Rain: Light', icon: 'ac_unit' },
    71: { description: 'Snow fall: Slight', icon: 'weather_snowy' },
    77: { description: 'Snow grains', icon: 'ac_unit' },
    80: { description: 'Rain showers: Slight', icon: 'shower' },
    95: { description: 'Thunderstorm', icon: 'thunderstorm' },
    96: { description: 'Thunderstorm with hail', icon: 'thunderstorm' },
  };

  return weatherMap[code] ?? { description: 'Unknown', icon: 'help_outline' };
}