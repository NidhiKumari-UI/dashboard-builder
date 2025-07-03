import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { LineChartComponent } from '../SharedModule/line-chart/line-chart.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface DailyData {
  labels: string;
  data: number;
}

@Component({
  selector: 'app-daily',
  standalone: true,
  imports: [CommonModule, LineChartComponent, HttpClientModule],
  templateUrl: './DailyWidget.component.html',
  styleUrl: './DailyWidget.component.css'
})
export class DailyComponent {
  private http = inject(HttpClient);
  @Output() delete = new EventEmitter<void>();
  labels: string[] = [];
  data: number[] = [];

  ngOnInit() {
    this.http.get<DailyData[]>('mock-data.json').subscribe(data => {
      const processedData = this.processDailyCheckins(data);
      this.labels = processedData.labels;
      this.data = processedData.values;
    });
  }

  processDailyCheckins(data: any[]) {
    const days = 14;
    const counts = new Map<string, number>();
    const labels: string[] = [];
    for (let i = 0; i < days; i++) {
      const d = new Date();
      d.setHours(0, 0, 0, 0);
      d.setDate(d.getDate() - (days - 1 - i));
      const dateString = d.toISOString().split('T')[0];
      labels.push(d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
      counts.set(dateString, 0);
    }
    data.forEach(booking => {
      if (counts.has(booking.checkInDate)) {
        counts.set(booking.checkInDate, counts.get(booking.checkInDate)! + 1);
      }
    });
    return { labels, values: Array.from(counts.values()) };
  }

  onDelete() {
    this.delete.emit();
  }
}

