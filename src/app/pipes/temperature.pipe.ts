// src/app/pipes/temperature.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature',
  standalone: true,
})
export class TemperaturePipe implements PipeTransform {
  transform(value: number, unit: 'C' | 'F'): number {
    if (unit === 'F') {
      return (value * 9) / 5 + 32;
    } else {
      return ((value - 32) * 5) / 9;
    }
  }
}
