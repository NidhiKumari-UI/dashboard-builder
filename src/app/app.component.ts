import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './Occupancy/OccupancyWidget/OccupancyWidget.component';
import { WeekdayWidgetComponent } from './Weekday/weekday-widget/weekday-widget.component';
import { DailyComponent } from './DailyWidget/DailyWidget.component';
import { ModalComponent } from './Modal/modal/modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [DashboardComponent, WeekdayWidgetComponent, DailyComponent, ModalComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  showDashboard = true;
  showWeekday = false;
  showDaily = false;
  @ViewChild('modal') modal!: ModalComponent;

  removeDashboard() {
    this.showDashboard = false;
  }

  removeWeekday() {
    this.showWeekday = false;
  }

  removeDaily() {
    this.showDaily = false;
  }

  showAddChartDialog() {
    this.modal.open();
  }

  onModalClosed() {
    console.log('Modal closed');
  }

  getDisplayedWidgets() {
    return {
      occupancy: this.showDashboard,
      weekday: this.showWeekday,
      daily: this.showDaily
    };
  }

  onAddWidgets(widgets: { occupancy: string; weekday: string; daily: string }) {
    if (widgets.occupancy === 'selected' && !this.showDashboard) {
      this.showDashboard = true;
    }
    if (widgets.weekday === 'selected' && !this.showWeekday) {
      this.showWeekday = true;
    }
    if (widgets.daily === 'selected' && !this.showDaily) {
      this.showDaily = true;
    }
  }
}
