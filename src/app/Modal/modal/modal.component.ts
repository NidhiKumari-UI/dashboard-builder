import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, Input } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
	selector: 'app-modal',
	imports: [CommonModule, ReactiveFormsModule],
	templateUrl: './modal.component.html',
	styleUrl: './modal.component.css'
})
export class ModalComponent {
	visible = false;

	@Input() displayedWidgets: { occupancy: boolean; weekday: boolean; daily: boolean } = {
		occupancy: false,
		weekday: false,
		daily: false
	};

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



