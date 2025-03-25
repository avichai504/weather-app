import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemperaturePipe } from '../../pipes/temperature.pipe';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, TemperaturePipe],
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent {
  history: { city: string; date: string; result: any }[] = [];

  ngOnInit(): void {
    const raw = localStorage.getItem('history');
    this.history = raw ? JSON.parse(raw) : [];
  }

  clearHistory(): void {
    localStorage.removeItem('history');
    this.history = [];
  }
}
