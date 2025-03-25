import { Routes } from '@angular/router';
import { CurrentWeatherPage } from './pages/current-weather.page/current-weather.page';
import { ForecastPage } from './pages/forecast.page/forecast.page';

export const routes: Routes = [
  { path: '', redirectTo: '/current', pathMatch: 'full' },
  { path: 'current', component: CurrentWeatherPage },
  { path: 'forecast', component: ForecastPage },
];
