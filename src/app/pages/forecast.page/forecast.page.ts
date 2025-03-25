import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-forecast-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forecast.page.html',
  styleUrls: ['./forecast.page.css'],
})
export class ForecastPage {
  city = 'Tel Aviv';
  forecast: any[] = [];
  loading = false;

  constructor(private weatherService: WeatherService) {
    this.fetchForecast();
  }

  fetchForecast() {
    this.loading = true;
    this.weatherService.getForecast(this.city).subscribe((data) => {
      this.forecast = data;
      this.loading = false;
    });
  }
}
