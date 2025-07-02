import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './Occupancy/OccupancyWidget/OccupancyWidget.component';
import {WeekdayWidgetComponent} from './Weekday/weekday-widget/weekday-widget.component';
import {DailyComponent} from './DailyWidget/DailyWidget.component';
import { ModalComponent } from './Modal/modal/modal.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [ DashboardComponent, WeekdayWidgetComponent, DailyComponent, ModalComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  showDashboard = true;
  showWeekday = false;
  showDaily = false;

  // Removed duplicate declaration of showDashboard
  // showDashboard: boolean = false;

  toggleDashboard() {
    this.showDashboard = !this.showDashboard;
  }
  
  // Ensure showDashboard is declared only once


  handleAddWidgets(event: { occupancy: string; weekday: string; daily: string }) {
    if (event.occupancy) {
      this.showDashboard = true;
    }
    if (event.weekday) {
      this.showWeekday = true;
    }
    if (event.daily) {
      this.showDaily = true;
    }
  }

  removeDashboard() {
    this.showDashboard = false;
  }

  removeWeekday() {
    this.showWeekday = false;
  }

  removeDaily() {
    this.showDaily = false;
  }

  @ViewChild('modal') modal!: ModalComponent;
  
  showAddChartDialog() {
      this.modal.open();
    }
  
    onModalClosed() {
      console.log('Modal closed');
    }
}
