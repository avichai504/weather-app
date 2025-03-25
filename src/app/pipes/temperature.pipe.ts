import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature',
  standalone: true,
})
export class TemperaturePipe implements PipeTransform {
  transform(value: number, unit: 'C' | 'F'): number {
    return unit === 'C' ? value : (value * 9) / 5 + 32;
  }
}
