import {ApplicationConfig, provideExperimentalZonelessChangeDetection} from '@angular/core';
import {PeriodicElementsStore} from './store/periodic-elements-store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    PeriodicElementsStore
  ]
};
