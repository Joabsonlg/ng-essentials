import {Component} from '@angular/core';
import {BarChartComponent} from "../../../charts/components/bar-chart/bar-chart.component";
import {AlertService} from "../../../../services/AlertService";

@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [
    BarChartComponent
  ],
  templateUrl: './alerts.component.html',
  styleUrl: './alerts.component.scss'
})
export class AlertsComponent {
  constructor(private alertService: AlertService) {
  }

  openToast(message: string, action: string, type: string) {
    this.alertService.openSnackBar(message, action, type);
  }

  openDialog(title: string, message: string, type: 'success' | 'error' | 'warning' | 'info', icon: string, buttons: [{
    label: string
  }]) {
    this.alertService.openDialog(title, message, type, icon, buttons);
  }
}
