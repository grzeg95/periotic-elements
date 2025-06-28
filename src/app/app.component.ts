import {Component, inject, OnInit} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatProgressBar} from '@angular/material/progress-bar';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable
} from '@angular/material/table';
import {debounceTime, distinctUntilChanged} from 'rxjs';
import {EditPeriodicElementComponent} from './componets/edit-periodic-element/edit-periodic-element.component';
import {
  EditPeriodicElementResult,
  EditPerioticElement,
  EditPerioticElementPropertyName
} from './models/edit-periotic-element';
import {PeriodicElementsStore} from './store/periodic-elements-store';

@Component({
  selector: 'app-root',
  imports: [
    MatProgressBar,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatRowDef,
    MatFormField,
    MatLabel,
    MatInput,
    MatLabel,
    MatFormField,
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  protected readonly _periodicElementsStore = inject(PeriodicElementsStore);
  private readonly _dialog = inject(MatDialog);

  protected _displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  protected readonly _filter = new FormControl<string>('');

  ngOnInit(): void {
    this._periodicElementsStore.loadAll();

    this._filter.valueChanges.pipe(
      debounceTime(2000),
      distinctUntilChanged()
    ).subscribe(filter => {
      this._periodicElementsStore.applyFilter(filter || '');
    });
  }

  openEditPeriodicElement(id: string, editPerioticElementPropertyName: EditPerioticElementPropertyName, value: string | number) {

    const dialogRef = this._dialog.open<EditPeriodicElementComponent, EditPerioticElement, EditPeriodicElementResult>(EditPeriodicElementComponent, {
      data: {id, editPerioticElementPropertyName, value} as EditPerioticElement,
    });

    dialogRef.afterClosed().subscribe((editPeriodicElementResult) => {
      this._periodicElementsStore.updateElement(editPeriodicElementResult!);
    });
  }
}
