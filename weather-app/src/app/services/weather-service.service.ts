import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { map, switchMap } from 'rxjs';
import { getWeatherDetail } from '../utils/weather.condition';
import { ForeCast, Weather } from '../model/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  geoUrl = 'https://geocoding-api.open-meteo.com/v1/search';
  foreCastUrl = 'https://api.open-meteo.com/v1/forecast';
  http = inject(HttpClient);

  getWeatherByCity(city: string) {
    return this.getCoOrdinates(city).pipe(
      switchMap((geoData) => {
        const location = geoData.results?.[0];
        if (!location) throw new Error('City data not found');

        const { latitude, longitude, name, country } = location;
        return this.http
          .get<any>(
            `${this.foreCastUrl}?latitude=${latitude}&longitude=${longitude}` +
              `&current=temperature_2m,wind_speed_10m,relative_humidity_2m,wind_speed_10m,weathercode` +
              `&daily=temperature_2m_max,temperature_2m_min,weathercode` +
              `&timezone=auto`,
          )
          .pipe(
            map((data) => {
              const current = data.current;
              const daily = data.daily;
              const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
              const weatherDeatil = getWeatherDetail(current.weathercode);
              const weather: Weather = {
                city: name,
                country: country,
                temperature: Math.round(current.temperature_2m),
                feelsLike: Math.round(current.temperature_2m - 2),
                condition: weatherDeatil.description,
                humidity: current.relative_humidity_2m,
                windSpeed: Math.round(current.wind_speed_10m),
                icon: weatherDeatil.icon,
              };
              const foreCast: ForeCast = daily.time.slice(1, 5).map((date: string, i: number) => ({
                day: days[new Date(date).getDay()],
                date: new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
                maxTemp: Math.round(daily.temperature_2m_max[i + 1]),
                minTemp: Math.round(daily.temperature_2m_min[i + 1]),
                condition: getWeatherDetail(daily.weathercode[i+1]).description,
                icon: getWeatherDetail(daily.weathercode[i+1]).icon
              }));
              return {weather, foreCast};
            }),
          );
      }),
    );
  }

  //get latitude/longitude of city
  private getCoOrdinates(city: string) {
    return this.http.get<any>(`${this.geoUrl}?name=${city}&count=1&language=en&format=json`);
  }
}
