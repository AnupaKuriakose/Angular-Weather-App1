import { Component, EventEmitter, inject, model, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { WeatherService } from '../../services/weather-service.service';
import {  WeatherStateService } from '../../services/weather-state.service';

@Component({
  selector: 'app-search',
  imports: [
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  templateUrl: './search.html',
  styleUrl: './search.scss',
})
export class Search {
  searchCity = new FormControl();
  weatherService = inject(WeatherService);
  state = inject(WeatherStateService)
 
  search() {
    const city = this.searchCity.value;
    if (city) {
      this.state.setLoading();
      this.weatherService.getWeatherByCity(city).subscribe({
        next: (result) => {
          this.state.setData(result);
        },
        error: () => {
          this.state.setError("City not found");
        },
      });
    }
  }
}
