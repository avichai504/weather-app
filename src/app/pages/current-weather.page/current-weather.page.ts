import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from '../../services/weather.service';
import { Weather } from '../../models/weather.model';
import { TemperaturePipe } from '../../pipes/temperature.pipe';
import { HistoryComponent } from '../../components/history/history.component';

@Component({
  selector: 'app-current-weather-page',
  standalone: true,
  imports: [CommonModule, TemperaturePipe, HistoryComponent],
  providers: [WeatherService],
  templateUrl: './current-weather.page.html',
  styleUrls: ['./current-weather.page.css'],
})
export class CurrentWeatherPage {
  city = 'Tel Aviv';
  cities = [
    'Tel Aviv',
    'London',
    'New York',
    'Tokyo',
    'Sydney',
    'Berlin',
    'Paris',
    'Rome',
    'Madrid',
    'Los Angeles',
  ];
  unit: 'C' | 'F' = 'C';
  weather: Weather | null = null;
  loading = false;

  constructor(private weatherService: WeatherService) {
    this.fetchWeather();
  }
  rawData: any = null;

  fetchWeather() {
    this.loading = true;
    this.weatherService.getCurrentWeather(this.city).subscribe(() => {
      // this.weather = data;
      this.rawData = this.weatherService.rawApiData;
      this.loading = false;
    });
  }

  // from the "select" element
  onCityChange(newCity: string) {
    this.city = newCity;
    this.fetchWeather();

    this.weatherService.getCurrentWeather(newCity).subscribe((data) => {
      this.weather = data;
      this.loading = false;
      const history = JSON.parse(localStorage.getItem('history') || '[]');
      history.push(data);
      localStorage.setItem('history', JSON.stringify(history));
    });
  }

  toggleUnit() {
    this.unit = this.unit === 'C' ? 'F' : 'C';
  }
}
