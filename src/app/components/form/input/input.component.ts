import {booleanAttribute, Component, Input, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {NgxMaskDirective} from 'ngx-mask';
import {ValidationService} from "../../../services/validationService";

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    NgForOf,
    ReactiveFormsModule,
    NgxMaskDirective,
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent implements OnInit {
  @Input() control!: FormControl;
  @Input() label!: string;
  @Input() controlName!: string;
  @Input({transform: booleanAttribute}) isRequired: boolean = false;
  @Input() mask: string = '';
  @Input() placeholder: string = '';

  private _type: string = 'text';
  private _isFormSubmitted: boolean = false;

  @Input()
  set type(value: string) {
    const forbiddenTypes = ['checkbox', 'radio'];
    if (forbiddenTypes.includes(value.toLowerCase())) {
      console.error(`The type "${value}" is not allowed.`);
      this._type = 'text';
    } else {
      this._type = value;
    }
  }

  get type(): string {
    return this._type;
  }

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
    this.errors = this.validationService.getErrorMessage(this.control, this.label, this.type);
  }
}
