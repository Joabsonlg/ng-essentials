import {Component, Inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatButton} from '@angular/material/button';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {MatIcon} from '@angular/material/icon';

export interface DialogData {
  title: string;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info'; // Tipo de alerta
  icon?: string;
  buttons: { label: string; value?: string; color?: string }[];
}

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButton,
    NgForOf,
    NgClass,
    MatIcon,
    NgIf,
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
})
export class DialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
  }
}
