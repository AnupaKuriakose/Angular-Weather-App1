import { NumberLiteralType } from 'typescript';

export interface Weather {
  city: string;
  country: string;
  temperature: number;
  feelsLike: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  icon: string;
}

export interface ForeCast {
  day: string;
  maxTemp: number;
  minTemp: number;
  condition: string;
  icon: string;
}

