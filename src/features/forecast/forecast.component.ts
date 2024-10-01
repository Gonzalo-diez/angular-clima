import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AsyncPipe, NgIf, NgFor, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../../services/weather.service';
import { CurrentWeatherModel } from '../../models/weather.model';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
  standalone: true,
  imports: [AsyncPipe, NgIf, NgFor, NgClass, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForecastComponent {
  weatherData!: CurrentWeatherModel; 
  city: string = '';
  lat: number | null = null; 
  lon: number | null = null;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    // Ya no es necesario inicializar el clima al inicio
  }

  getWeatherClass() {
    if (!this.weatherData || !this.weatherData.weather[0]) {
      return '';
    }
  
    switch (this.weatherData.weather[0].main) {
      case 'Clear':
        return 'sunny';
      case 'Clouds':
        return 'cloudy';
      case 'Rain':
        return 'rainy';
      case 'Snow':
        return 'snowy';
      default:
        return '';
    }
  } 

  getCurrentWeather() {
    this.weatherService.getWeatherByCity(this.city).subscribe(
      (data) => {
        this.weatherData = data;
        console.log('Current Weather Data:', this.weatherData);
      },
      (error) => {
        console.error('Error fetching weather data', error);
        alert('City not found. Please try again.');
      }
    );
  }

  searchCity() {
    this.getCurrentWeather();
  }
}