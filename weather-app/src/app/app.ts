import { Component, inject, signal } from '@angular/core';
import { Header } from './components/header/header';
import { WeatherCard } from './components/weather-card/weather-card';
import { Search } from './components/search/search';
import { Footer } from './components/footer/footer';
import { WeatherStateService } from './services/weather-state.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-root',
  imports: [Header, WeatherCard, Search, Footer, MatProgressSpinnerModule ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  state = inject(WeatherStateService);
}
