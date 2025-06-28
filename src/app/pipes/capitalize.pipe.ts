import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): unknown {
    const firstLetter = value[0].toUpperCase();
    const restLetters = value.slice(1);
    return firstLetter + restLetters;
  }
}
