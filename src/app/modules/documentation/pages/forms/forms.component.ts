import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {InputComponent} from "../../../../components/form/input/input.component";
import {NgxMaskDirective} from "ngx-mask";

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    InputComponent,
    NgForOf,
    NgxMaskDirective
  ],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent implements OnInit {
  exampleForm: FormGroup = new FormGroup({});
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.exampleForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get f() {
    return this.exampleForm.controls;
  }

  getControl(controlName: string): FormControl {
    return this.exampleForm.get(controlName) as FormControl;
  }

  onSubmit() {
    this.submitted = true;

    if (this.exampleForm.invalid) {
      return;
    }

    console.log('Form Submitted', this.exampleForm.value);
  }
}
