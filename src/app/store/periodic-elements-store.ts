import {inject} from '@angular/core';
import {patchState, signalStore, withMethods, withState} from '@ngrx/signals';
import {PeriodicElement} from '../models/periotic-element';
import {PeriodicElementsService} from '../services/periodic-elements.service';

type PeriodicElementsState = {
  isLoading: boolean;
  periodicElements: PeriodicElement[];
};

const initialState: PeriodicElementsState = {
  isLoading: false,
  periodicElements: [],
};

export const PeriodicElementsStore = signalStore(
  withState(initialState),
  withMethods((store, periodicElementsService = inject(PeriodicElementsService)) => ({
    async loadAll(): Promise<void> {
      patchState(store, {isLoading: true});
      const periodicElements = await periodicElementsService.loadAll();
      patchState(store, {periodicElements, isLoading: false});
    }
  }))
);
