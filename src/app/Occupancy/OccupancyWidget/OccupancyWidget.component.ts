import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from '../../SharedModule/bar-chart/bar-chart.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, BarChartComponent],
  templateUrl: './OccupancyWidget.component.html',
  styleUrls: ['./OccupancyWidget.component.css']
})
export class DashboardComponent {
  @Output() delete = new EventEmitter<void>();

  onDelete() {
    this.delete.emit();
  }
}


  