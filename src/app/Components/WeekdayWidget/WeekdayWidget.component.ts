import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from '../../SharedModule/bar-chart/bar-chart.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


interface BookingData {
    checkInDate: string;
    roomType: string;
}

@Component({
    selector: 'app-weekday-widget',
    imports: [CommonModule, BarChartComponent, HttpClientModule],
    templateUrl: './WeekdayWidget.component.html',
    styleUrls: ['./WeekdayWidget.component.css']
})


export class WeekdayWidgetComponent implements OnInit {

    @Output() delete = new EventEmitter<void>();
    private http = inject(HttpClient);
    onDelete() {
        this.delete.emit();
    }

    labels: string[] = [];
    data: number[] = [];

    ngOnInit() {
        this.http.get<BookingData[]>('mock-data.json').subscribe(data => {
            const processedData = this.processWeekdayCheckins(data);
            this.labels = processedData.labels;
            this.data = processedData.values;
        });
    }


    processWeekdayCheckins(data: any[]) {
        const counts = new Array(7).fill(0);
        data.forEach(booking => {
            const dayIndex = new Date(booking.checkInDate + 'T00:00:00').getDay();
            counts[dayIndex]++;
        });
        const reorderedLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        const reorderedCounts = [...counts.slice(1), counts[0]];
        return { labels: reorderedLabels, values: reorderedCounts };
    }

}
