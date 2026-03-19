import { computed, Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class WeatherStateService {
  //private writable signals
  private _loading = signal<boolean>(false);
  private _error = signal<string | null>(null);
  private _weatherData = signal<any>(null);

  //public readonly  - components can only read
  public loading = this._loading.asReadonly();
  public error = this._error.asReadonly();
  public weatherData = this._weatherData.asReadonly();

  hasData = computed(() => this.weatherData() !== null);

  setLoading() {
    this._loading.set(true);
    this._error.set(null);
    this._weatherData.set(null);
  }

  setData(data: any) {
    this._weatherData.set(data);
    this._loading.set(false);
  }

  setError(message: string) {
    this._error.set(message);
    this._loading.set(false);
  }
}
