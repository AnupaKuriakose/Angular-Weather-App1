import { Component, EventEmitter, inject, model, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { WeatherService } from '../../services/weather-service.service';

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
  @Output() weatherDataEvent = new EventEmitter<any>();
  loading = false;
  search() {
    this.loading = true;
    const city = this.searchCity.value;
    if (city) {
      this.weatherService.getWeatherByCity(city).subscribe({
        next: (result) => {
          console.log('result', result)
          this.weatherDataEvent.emit(result)},
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          this.loading = false;
        },
      });
    }
  }
}
