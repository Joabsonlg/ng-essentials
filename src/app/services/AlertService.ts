import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {DialogComponent, DialogData} from '../components/dialog/dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {SnackbarComponent} from "../components/snackbar/snackbar.component";

@Injectable({
  providedIn: 'root',
})
export class AlertService {

  constructor(private snackBar: MatSnackBar, private dialog: MatDialog) {
  }

  openSnackBar(message: string, action?: string, type?: string) {
    let panelClass: string;
    switch (type) {
      case 'success':
        panelClass = 'success-snackbar';
        break;
      case 'error':
        panelClass = 'error-snackbar';
        break;
      case 'warning':
        panelClass = 'warning-snackbar';
        break;
      case 'info':
        panelClass = 'info-snackbar';
        break;
      default:
        panelClass = 'info-snackbar';
        break;
    }

    this.snackBar.openFromComponent(SnackbarComponent, {
      data: { message, action },
      duration: 50000000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass: [panelClass]
    });
  }

  /**
   * Opens a dialog with the provided parameters.
   *
   * @param {string} title - The title of the dialog.
   * @param {string} message - The message to be displayed in the dialog.
   * @param {'success' | 'error' | 'warning' | 'info'} type - The type of the dialog, which determines the dialog's color and icon.
   * @param {string} icon - The icon to be displayed in the dialog.
   * @param {{label: string}[]} buttons - An array of objects, each with a 'label' property representing the text of a button.
   */
  openDialog(title: string, message: string, type: 'success' | 'error' | 'warning' | 'info', icon: string, buttons: [{
    label: string
  }]): void {
    const dialogData: DialogData = {
      title: title,
      type: type,
      icon: icon,
      message: message,
      buttons: buttons,
    };

    this.dialog.open(DialogComponent, {
      width: '400px',
      data: dialogData,
    });
  }

  /**
   * Opens a success dialog with the provided title and message.
   *
   * @param {string} title - The title of the dialog.
   * @param {string} message - The message to be displayed in the dialog.
   */
  openSuccessDialog(title: string, message: string): void {
    this.openDialog(title || 'Sucesso', message, 'success', 'ph ph-check-circle', [{label: 'Fechar'}]);
  }

  /**
   * Opens an error dialog with the provided title and message.
   *
   * @param {string} title - The title of the dialog.
   * @param {string} message - The message to be displayed in the dialog.
   */
  openErrorDialog(title: string, message: string): void {
    this.openDialog(title || 'Erro', message, 'error', 'ph ph-x-circle', [{label: 'Fechar'}]);
  }

  /**
   * Opens a warning dialog with the provided title and message.
   *
   * @param {string} title - The title of the dialog.
   * @param {string} message - The message to be displayed in the dialog.
   */
  openWarningDialog(title: string, message: string): void {
    this.openDialog(title || 'Atenção', message, 'warning', 'ph ph-warning-circle', [{label: 'Fechar'}]);
  }

  /**
   * Opens an info dialog with the provided title and message.
   *
   * @param {string} title - The title of the dialog.
   * @param {string} message - The message to be displayed in the dialog.
   */
  openInfoDialog(title: string, message: string): void {
    this.openDialog(title || 'Atenção', message, 'info', 'ph ph-info', [{label: 'Fechar'}]);
  }
}
