import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Weather } from '../models/weather.model';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private apiKey = '5ee4d0bad339e81e1c2518e00300c598';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  public rawApiData: any;

  constructor(private http: HttpClient) {}

  getCurrentWeather(city: string): Observable<Weather> {
    const url = `${this.apiUrl}?q=${city}&units=metric&appid=${this.apiKey}`;
    return this.http.get<any>(url).pipe(
      // tap is used to store the raw data in the rawApiData property
      tap((data) => (this.rawApiData = data)),
      map((data) => ({
        city: data.name,
        temperature: data.main.temp,
        description: data.weather[0].description,
        icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
      }))
    );
  }

  getForecast(city: string): Observable<any[]> {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${this.apiKey}`;
    return this.http.get<any>(url).pipe(
      map((data) =>
        data.list
          .filter((_: any, i: number) => i % 8 === 0)
          .map((entry: any) => ({
            date: entry.dt_txt,
            temperature: entry.main.temp,
            description: entry.weather[0].description,
            icon: `https://openweathermap.org/img/wn/${entry.weather[0].icon}@2x.png`,
          }))
      )
    );
  }
}
