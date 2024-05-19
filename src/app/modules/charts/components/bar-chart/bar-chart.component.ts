import {Component, Input} from '@angular/core';
import {ChartDataset, ChartOptions, ChartType} from "chart.js";
import {BaseChartDirective} from "ng2-charts";

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [
    BaseChartDirective
  ],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss'
})
export class BarChartComponent {
  @Input() barChartOptions: ChartOptions = {
    responsive: true,
  };
  @Input() barChartLabels: string[] = [];
  @Input() barChartType: ChartType = 'bar';
  @Input() barChartLegend = true;
  @Input() barChartData: ChartDataset[] = [];
}
