import { Component, computed, effect, input, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-weather-card',
  imports: [MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './weather-card.html',
  styleUrl: './weather-card.scss',
})
export class WeatherCard {
  weather = input.required<any>();
  isCelsius = signal(true);

  temperature = computed(() => {
    const temp = this.weather()?.weather?.temperature;
    return this.isCelsius() ? temp : Math.round((temp * 9) / 5 + 32);
  });

  feelsLike = computed(() => {
    const feels = this.weather()?.weather?.feelsLike;
    return this.isCelsius() ? feels : Math.round((feels * 9) / 5 + 32);
  });
  
  toggleUnit() {
    this.isCelsius.update((v) => !v);
  }
}
