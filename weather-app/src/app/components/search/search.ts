import { Component, EventEmitter, inject, model, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { WeatherService } from '../../services/weather-service.service';
import { WeatherStateService } from '../../services/weather-state.service';
import { searchValidator } from '../../validators/search.validator';
import { debounceTime, distinctUntilChanged } from 'rxjs';

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
export class Search implements OnInit{
  
  searchCity = new FormControl('', [Validators.required, Validators.minLength(3), searchValidator]);
  weatherService = inject(WeatherService);
  state = inject(WeatherStateService);

  get cityErrors() {
  return this.searchCity.invalid && (this.searchCity.dirty || this.searchCity.touched);
}

ngOnInit(): void {
    this.searchCity.valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(300)
    )
    .subscribe((value) => {
      if(value?.trim()?.length === 0)
      {
        this.state.setData(null);
      }
    })
  }
  search() {
    if (this.searchCity.invalid) {
      return;
    }
    const city = this.searchCity.value?.trim();
    if(city){
    this.state.setLoading();
    this.weatherService.getWeatherByCity(city).subscribe({
      next: (result) => {
        this.state.setData(result);
      },
      error: (err) => {
        this.state.setError(err.message);
      },
    });
  }
  }
}
