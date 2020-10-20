import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluralize'
})
export class PluralizePipe implements PipeTransform {

  transform(count: number, noun: string, suffix = 's'): any {
    if (count < 0) {
      return;
    }

    return `${count} ${noun}${count !== 1 ? suffix : ''}`;
  }

}
