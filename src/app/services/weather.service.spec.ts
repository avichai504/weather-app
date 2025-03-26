import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { WeatherService } from './weather.service';
import { Weather } from '../models/weather.model';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherService],
    });

    service = TestBed.inject(WeatherService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch and map current weather data correctly', () => {
    const mockApiResponse = {
      name: 'Tel Aviv',
      main: { temp: 27 },
      weather: [{ description: 'clear sky', icon: '01d' }],
    };

    const expected: Weather = {
      city: 'Tel Aviv',
      temperature: 27,
      description: 'clear sky',
      icon: 'https://openweathermap.org/img/wn/01d@2x.png',
    };

    service.getCurrentWeather('Tel Aviv').subscribe((result) => {
      expect(result).toEqual(expected);
    });

    const req = httpMock.expectOne((req) =>
      req.url.includes('weather') && req.url.includes('Tel Aviv')
    );

    expect(req.request.method).toBe('GET');
    req.flush(mockApiResponse);
  });
});
