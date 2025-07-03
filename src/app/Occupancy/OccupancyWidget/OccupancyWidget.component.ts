import { Component, EventEmitter, Output, inject, OnInit } from '@angular/core';
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
export class DashboardComponent implements OnInit {
  @Output() delete = new EventEmitter<void>();
  private http = inject(HttpClient);

  labels: string[] = [];
  data: number[] = [];

  ngOnInit() {
    this.http.get<OccupancyData>('mock-data.json').subscribe(res => {
      this.labels = res.labels;
      this.data = res.data;
    });
  }

  onDelete() {
    this.delete.emit();
  }
}


