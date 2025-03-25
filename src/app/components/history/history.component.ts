import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Weather } from '../../models/weather.model';
import { TemperaturePipe } from '../../pipes/temperature.pipe';
import { HistoryService } from '../../services/history.service';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, TemperaturePipe],
  templateUrl: 'history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent {
  history: Weather[] = [];

  constructor(private historyService: HistoryService) {}

  ngOnInit(): void {
    this.historyService.history$.subscribe((data) => {
      this.history = data;
    });
  }

  deleteEntry(index: number): void {
    this.historyService.deleteEntry(index);
  }
}
