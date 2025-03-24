// src/app/pages/current-weather.page/current-weather.page.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from '../../services/weather.service';
import { Weather } from '../../models/weather.model';
import { TemperaturePipe } from '../../pipes/temperature.pipe';

@Component({
  selector: 'app-current-weather-page',
  standalone: true,
  imports: [CommonModule, TemperaturePipe],
  templateUrl: './current-weather.page.html',
  styleUrls: ['./current-weather.page.css'],
})
export class CurrentWeatherPage {
  city = 'Tel Aviv';
  cities = ['Tel Aviv', 'London', 'New York', 'Tokyo'];
  unit: 'C' | 'F' = 'C';
  weather: Weather | null = null;
  loading = false;

  constructor(private weatherService: WeatherService) {
    console.log('CurrentWeatherPage constructor');
    this.fetchWeather();
  }

  fetchWeather() {
    this.loading = true;
    this.weatherService.getCurrentWeather(this.city).subscribe((data) => {
      this.weather = data;
      this.loading = false;
    });
  }

  // from the "select" element
  onCityChange(newCity: string) {
    this.city = newCity;
    this.fetchWeather();
    localStorage.setItem('city', newCity); // saving an array of searching id, and the server response with the fully prev search results.
    //* need to save an `searchId` in the localStorage, and then when the user search for the same city, we will check if the `searchId` is the same as the one in the localStorage, if so, we will return the results from the localStorage.

    // localStorage.setItem('searchId', this.weatherSearch?.id); // saving the searchId in the localStorage.

  }


  toggleUnit() {
    this.unit = this.unit === 'C' ? 'F' : 'C';
  }
}
