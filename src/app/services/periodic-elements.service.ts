import {Injectable} from '@angular/core';
import {ELEMENT_DATA} from '../data/element-data';
import {PeriodicElement} from '../models/periotic-element';

@Injectable({
  providedIn: 'root'
})
export class PeriodicElementsService {

  loadAll() {
    return new Promise<PeriodicElement[]>(resolve => {
      setTimeout(() => {
        resolve(ELEMENT_DATA);
      }, 1000);
    })
  }
}
