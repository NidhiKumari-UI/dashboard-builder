import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from '../../SharedModule/bar-chart/bar-chart.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface OccupancyData {
  labels: string[];
  data: number[];
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, BarChartComponent, HttpClientModule],
  templateUrl: './OccupancyWidget.component.html',
  styleUrls: ['./OccupancyWidget.component.css']
})
export class DashboardComponent {
  @Output() delete = new EventEmitter<void>();
  private http = inject(HttpClient);

  onDelete() {
    this.delete.emit();
  }
}


