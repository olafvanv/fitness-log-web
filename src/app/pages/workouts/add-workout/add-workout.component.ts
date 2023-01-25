import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IHeaderTextButton } from '../../../shared/header/models/header-text-button.interface';

@Component({
  selector: 'app-add-workout',
  templateUrl: './add-workout.component.html',
  styleUrls: ['./add-workout.component.scss'],
})
export class AddWorkoutComponent {
  @Output()
  public close = new EventEmitter<void>();

  public form: FormGroup = this.fb.group({
    name: ['', Validators.required],
    notes: [''],
  });
  public cancelButton: IHeaderTextButton = {
    label: 'Cancel',
    action: this.onCancel.bind(this),
  };
  public saveButton: IHeaderTextButton = {
    label: 'Save',
    action: this.onSave.bind(this),
    disabled: this.form?.invalid,
  };

  constructor(private fb: FormBuilder) {
    this.form.valueChanges.subscribe(() => (this.saveButton.disabled = this.form.invalid));
  }

  public fieldInvalid(field: string) {
    const formField = this.form.get(field);

    return formField?.invalid && (formField.dirty || formField.touched);
  }

  private onCancel() {
    this.close.emit();
  }

  private onSave() {
    this.close.emit();
  }
}
