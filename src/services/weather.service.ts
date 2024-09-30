import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherModel, CurrentWeatherModel } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = '4de0420dbbaec0ffcd43512efc835dd3';
  private forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast';
  private weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) { }

  // Método para obtener el pronóstico
  getForecastByCoordinates(lat: number, lon: number): Observable<WeatherModel> {
    const url = `${this.forecastUrl}?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`;
    return this.http.get<WeatherModel>(url);
  }

  // Método para obtener el clima actual
  getWeatherByCity(city: string): Observable<CurrentWeatherModel> {
    const url = `${this.weatherUrl}?q=${city}&appid=${this.apiKey}&units=metric`;
    return this.http.get<CurrentWeatherModel>(url);
  }
}

