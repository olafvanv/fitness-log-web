import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input } from '@angular/core';
import { AbstractControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputType } from './models/input-type.type';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
})
export class InputFieldComponent implements AfterViewInit {
  @Input() formGroup!: FormGroup;
  @Input() label: string = '';
  @Input() name!: string;
  @Input() type: InputType = 'text';
  @Input() hint = '';
  @Input() disabled = false;

  public formControl!: AbstractControl | null;

  constructor() {}

  ngAfterViewInit(): void {
    this.formControl = this.formGroup.get(this.name);
  }

  public get showClearIcon(): boolean {
    return !!this.formControl?.value;
  }

  get isInvalid(): boolean {
    return !!this.formControl?.invalid && (this.formControl.dirty || this.formControl.touched);
  }

  get hasErrors(): boolean {
    return (
      !!this.formControl && (this.formControl.dirty || this.formControl.touched) && this.formControl.errors !== null
    );
  }
}
