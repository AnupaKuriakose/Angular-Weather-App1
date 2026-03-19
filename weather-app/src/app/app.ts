import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { WeatherCard } from './components/weather-card/weather-card';
import { Search } from './components/search/search';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, WeatherCard, Search, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  data:any;
  weatherData(data:any)
  {
    this.data = data;
  }
}
