import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from '../../SharedModule/bar-chart/bar-chart.component';


@Component({
  selector: 'app-weekday-widget',
  imports: [CommonModule, BarChartComponent],
  templateUrl: './weekday-widget.component.html',
  styleUrl: './weekday-widget.component.css'
})
export class WeekdayWidgetComponent {
  @Output() delete = new EventEmitter<void>();

  onDelete() {
    this.delete.emit();
  }
}
