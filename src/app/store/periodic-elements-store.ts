import {signalStore, withState} from '@ngrx/signals';

type PeriodicElementsState = {};

const initialState: PeriodicElementsState = {};

export const PeriodicElementsStore = signalStore(
  withState(initialState)
);
