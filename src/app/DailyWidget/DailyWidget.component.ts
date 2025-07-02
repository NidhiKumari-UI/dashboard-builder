import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { LineChartComponent } from '../SharedModule/line-chart/line-chart.component';




@Component({
  selector: 'app-daily',
  standalone: true,
  imports: [CommonModule, LineChartComponent],
  templateUrl: './DailyWidget.component.html',
  styleUrl: './DailyWidget.component.css'
})
export class DailyComponent {
  last14Days: string[] = [];
  checkInCounts: number[] = [];

  constructor() {
    this.generateChartData();
  }
  //Cross Button 
  @Output() delete = new EventEmitter<void>();

  onDelete() {
    this.delete.emit();
  }
  //

  generateChartData() {
    const today = new Date();

    for (let i = 13; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);

      const label = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      this.last14Days.push(label);

      const mockCheckIns = Math.floor(Math.random() * 50) + 10;
      this.checkInCounts.push(mockCheckIns);
    }
  }

}
