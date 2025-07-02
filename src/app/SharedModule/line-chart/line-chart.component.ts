
import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, Input, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.css'
})
export class LineChartComponent implements OnInit {
  @Input() labels: string[] = [];
  @Input() dataPoints: number[] = [];
  @Input() chartLabel: string = 'Check-ins';

  data: any;
  options: any;

  platformId = inject(PLATFORM_ID);

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.initChart();
  }

  initChart() {
    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--p-text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
      const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');
      const lineColor = documentStyle.getPropertyValue('--p-gray-500');

      this.data = {
        labels: this.labels,
        datasets: [
          {
            label: this.chartLabel,
            data: this.dataPoints,
            fill: false,
            borderColor: lineColor,
            tension: 0.4
          }
        ]
      };

      this.options = {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
          legend: {
            labels: { color: textColor }
          }
        },
        scales: {
          x: {
            ticks: { color: textColorSecondary },
            grid: { color: surfaceBorder, drawBorder: false }
          },
          y: {
            ticks: { color: textColorSecondary },
            grid: { color: surfaceBorder, drawBorder: false }
          }
        }
      };

      this.cd.markForCheck();
    }
  }
}
