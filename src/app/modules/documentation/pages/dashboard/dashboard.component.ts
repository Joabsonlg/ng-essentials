import {Component} from '@angular/core';
import {BarChartComponent} from "../../../charts/components/bar-chart/bar-chart.component";
import {ChartDataset, ChartOptions} from "chart.js";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    BarChartComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  public myOptions: ChartOptions = {
    responsive: true,
  };
  public myLabels: string[] = ['Label 1', 'Label 2', 'Label 3']; // Substitua pelos rótulos desejados
  public myData: ChartDataset[] = [
    {data: [65, 59, 80], label: 'Data Set 1'}, // Substitua pelos dados desejados
    {data: [28, 48, 40], label: 'Data Set 2'}  // Substitua pelos dados desejados
  ];
}
