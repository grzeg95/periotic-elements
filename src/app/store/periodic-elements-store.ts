import {computed, inject} from '@angular/core';
import {patchState, signalStore, withComputed, withMethods, withState} from '@ngrx/signals';
import {PeriodicElement} from '../models/periotic-element';
import {PeriodicElementsService} from '../services/periodic-elements.service';

type PeriodicElementsState = {
  isLoading: boolean;
  periodicElements: PeriodicElement[];
  filter: string;
};

const initialState: PeriodicElementsState = {
  isLoading: false,
  periodicElements: [],
  filter: '',
};

export const PeriodicElementsStore = signalStore(
  withState(initialState),
  withMethods((store, periodicElementsService = inject(PeriodicElementsService)) => ({
    async loadAll(): Promise<void> {
      patchState(store, {isLoading: true});
      const periodicElements = await periodicElementsService.loadAll();
      patchState(store, {periodicElements, isLoading: false});
    },
    applyFilter(filter: string) {
      patchState(store, {filter});
    }
  })),
  withComputed((state) => ({
    filteredPerioticElements: computed(() => {

      const periodicElements = state.periodicElements();
      const filter = state.filter();

      const filteredPerioticElements: PeriodicElement[] = [];

      for (const periodicElement of periodicElements) {
        if (
          periodicElement.position.toString().includes(filter.toLowerCase()) ||
          periodicElement.name.toLowerCase().includes(filter.toLowerCase()) ||
          periodicElement.weight.toString().includes(filter.toLowerCase()) ||
          periodicElement.symbol.toLowerCase().includes(filter.toLowerCase())
        ) {
          filteredPerioticElements.push(periodicElement);
        }
      }

      return filteredPerioticElements.sort((a, b) => a.position - b.position);
    })
  }))
);
