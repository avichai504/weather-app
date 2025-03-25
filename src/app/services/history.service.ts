import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Weather } from '../models/weather.model';

@Injectable({ providedIn: 'root' })
export class HistoryService {
  private historySubject = new BehaviorSubject<Weather[]>(this.loadHistory());
  history$ = this.historySubject.asObservable();

  private loadHistory(): Weather[] {
    const stored = localStorage.getItem('history');
    return stored ? JSON.parse(stored) : [];
  }

  addEntry(entry: Weather): void {
    const updated = [...this.loadHistory(), entry];
    localStorage.setItem('history', JSON.stringify(updated));
    this.historySubject.next(updated);
  }

  deleteEntry(index: number): void {
    const current = this.loadHistory();
    current.splice(index, 1);
    localStorage.setItem('history', JSON.stringify(current));
    this.historySubject.next(current);
  }
}
