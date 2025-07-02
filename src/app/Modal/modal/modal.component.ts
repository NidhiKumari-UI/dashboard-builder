import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  visible = false;

  @Input() showDashboard = false;
  @Input() showWeekday = false;
  @Input() showDaily = false;

  @Output() closed = new EventEmitter<void>();
  @Output() addWidgets = new EventEmitter<{ occupancy: string; weekday: string; daily: string }>();

  form = new FormGroup({
    occupancyWidget: new FormControl(''),
    weekdayWidget: new FormControl(''),
    dailyWidget: new FormControl(''),
  });

  open() {
    this.visible = true;
  }

  close() {
    this.visible = false;
    this.closed.emit();
    this.form.reset();
  }

  add() {
    if (this.form.valid) {
      const value = this.form.value;
      this.addWidgets.emit({
        occupancy: value.occupancyWidget ?? '',
        weekday: value.weekdayWidget ?? '',
        daily: value.dailyWidget ?? '',
      });
      this.close();
    }
  }
}
