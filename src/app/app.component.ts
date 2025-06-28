import {Component, inject, OnInit} from '@angular/core';
import {MatProgressBar} from '@angular/material/progress-bar';
import {PeriodicElementsStore} from './store/periodic-elements-store';

@Component({
  selector: 'app-root',
  imports: [
    MatProgressBar
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  protected readonly _periodicElementsStore = inject(PeriodicElementsStore);

  ngOnInit(): void {
    this._periodicElementsStore.loadAll();
  }
}
