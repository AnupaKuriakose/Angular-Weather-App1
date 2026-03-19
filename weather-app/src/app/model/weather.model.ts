
export interface Weather {
  city: string;
  country: string;
  temperature: number;
  feelsLike: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  icon: string;
  visibility: number;
}

export interface ForeCast {
  day: string;
  date: string;
  maxTemp: number;
  minTemp: number;
  condition: string;
  icon: string;
}

