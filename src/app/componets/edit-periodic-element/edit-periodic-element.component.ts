import {Component, inject, model, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {EditPerioticElement, EditPeriodicElementResult} from '../../models/edit-periotic-element';
import {CapitalizePipe} from '../../pipes/capitalize.pipe';

@Component({
  selector: 'app-edit-element',
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatFormField,
    MatLabel,
    MatInput,
    FormsModule,
    MatDialogActions,
    MatButton,
    CapitalizePipe,
    ReactiveFormsModule
  ],
  templateUrl: './edit-periodic-element.component.html',
  styleUrl: './edit-periodic-element.component.scss'
})
export class EditPeriodicElementComponent implements OnInit {

  protected readonly _dialogRef = inject(MatDialogRef<EditPeriodicElementComponent>);
  protected readonly _data = inject<EditPerioticElement>(MAT_DIALOG_DATA);

  protected readonly _editForm = new FormGroup({
    editedValue: new FormControl(''),
  });

  ngOnInit(): void {
    this._editForm.controls.editedValue.setValue(this._data.value);
  }

  onClose() {
    this._dialogRef.close({
      id: this._data.id,
      editPerioticElementPropertyName: this._data.editPerioticElementPropertyName,
      value: this._editForm.controls.editedValue.value
    } as EditPeriodicElementResult);
  }
}
