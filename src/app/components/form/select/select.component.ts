import {booleanAttribute, Component, Input, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {NgxMaskDirective} from 'ngx-mask';
import {ValidationService} from '../../service/validationService';
import {SelectOption} from '../../models/select-option';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [
    NgForOf,
    ReactiveFormsModule,
    NgIf,
    NgxMaskDirective,
    NgClass,
  ],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
})
export class SelectComponent implements OnInit {
  @Input() control!: FormControl;
  @Input() label!: string;
  @Input() controlName!: string;
  @Input({transform: booleanAttribute}) isRequired: boolean = false;
  @Input() mask: string = '';
  @Input() options: SelectOption[] = [];
  @Input() placeholder: string = '';
  @Input() value: string = '';

  private _isFormSubmitted: boolean = false;

  @Input()
  set isFormSubmitted(value: boolean) {
    this._isFormSubmitted = value;
    if (this._isFormSubmitted) {
      this.updateErrorMessages();
    }
  }

  get isFormSubmitted(): boolean {
    return this._isFormSubmitted;
  }

  constructor(private validationService: ValidationService) {
  }

  errors: string[] = [];

  ngOnInit() {
    this.control.setValue(this.value);
    this.control.statusChanges.subscribe((status: string) => {
      if (status === 'INVALID' && this.control.touched) {
        this.updateErrorMessages();
      } else {
        this.errors = [];
      }
    });
  }

  onBlur() {
    this.updateErrorMessages();
  }

  private updateErrorMessages() {
    this.errors = this.validationService.getErrorMessage(this.control, this.label, '');
  }
}
