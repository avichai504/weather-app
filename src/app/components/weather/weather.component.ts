import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemperaturePipe } from '../../pipes/temperature.pipe';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule, TemperaturePipe],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent {
  @Input() rawData: any = null;
  @Input() unit: 'C' | 'F' = 'C';
}
