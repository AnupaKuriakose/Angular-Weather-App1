import { Component, effect, input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-weather-card',
  imports: [MatCardModule],
  templateUrl: './weather-card.html',
  styleUrl: './weather-card.scss',
})
export class WeatherCard implements OnInit {
  weather = input.required<any>();
   constructor() {
    // This runs every time 'weather' is updated from the parent
    effect(() => {
      const data = this.weather();
      if (data) {
        console.log('Weather data received:', data);
      }
    });
  }

  ngOnInit(): void {
    //console.log('weathercard', this.weather());
  }
}

