import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forecast-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forecast-history.component.html',
  styleUrls: ['./forecast-history.component.css'],
})
export class ForecastHistoryComponent {
  history: {
    city: string;
    date: string;
    results: any[];
  }[] = [];

  ngOnInit(): void {
    const raw = localStorage.getItem('forecast-history');
    this.history = raw ? JSON.parse(raw) : [];
  }

  clearHistory(): void {
    localStorage.removeItem('forecast-history');
    this.history = [];
  }
}
