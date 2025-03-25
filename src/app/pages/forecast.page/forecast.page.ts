import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastComponent } from '../../components/forecast/forecast.component';
import { WeatherService } from '../../services/weather.service';
import { ForecastHistoryComponent } from '../../components/history/forecast-history.component';

@Component({
  selector: 'app-forecast-page',
  standalone: true,
  imports: [CommonModule, ForecastComponent, ForecastHistoryComponent],
  providers: [WeatherService],
  templateUrl: './forecast.page.html',
  styleUrls: ['./forecast.page.css'],
})
export class ForecastPage {
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
    'Moscow',
    'Beijing',
    'Mumbai',
    'Cairo',
    'Rio de Janeiro',
  ];
  city = '';
  forecast: any[] = [];
  loading = false;

  constructor(private weatherService: WeatherService) {}

  onCitySelect(selected: string) {
    this.city = selected;
    this.loading = true;
    this.weatherService.getForecast(this.city).subscribe((data) => {
      this.forecast = data;
      this.loading = false;

      // Save forecast history (basic)
      const stored = JSON.parse(
        localStorage.getItem('forecast-history') || '[]'
      );
      const entry = {
        city: this.city,
        date: new Date(),
        results: data,
      };
      localStorage.setItem(
        'forecast-history',
        JSON.stringify([...stored, entry])
      );
    });
  }
}
