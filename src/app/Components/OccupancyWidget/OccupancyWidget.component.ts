import { Component, EventEmitter, Output, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from '../../SharedModule/bar-chart/bar-chart.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface OccupancyData {
  labels: string;
  data: number;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, BarChartComponent, HttpClientModule],
  templateUrl: './OccupancyWidget.component.html',
  styleUrls: ['./OccupancyWidget.component.css']
})
export class DashboardComponent implements OnInit {
  @Output() delete = new EventEmitter<void>();
  private http = inject(HttpClient);

  labels: string[] = [];
  data: number[] = [];

  ngOnInit() {
    this.http.get<OccupancyData[]>('mock-data.json').subscribe(data => {
      const processedData = this.processRoomOccupancy(data);
      this.labels = processedData.labels;
      this.data = processedData.values;
    });
  }

  processRoomOccupancy(data: any[]) {
    const counts: Record<string, number> = {};
    data.forEach(booking => {
      counts[booking.roomType] = (counts[booking.roomType] || 0) + 1;
    });
    const sorted = Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);
    const labels = sorted.map(([roomType]) => roomType);
    const values = sorted.map(([, count]) => count);
    return { labels, values };
  }

  onDelete() {
    this.delete.emit();
  }
}


