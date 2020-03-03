import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if (!value) return '';
    let date = new Date(value);
    return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate() + " " + date.getHours() + ":" + date.getMinutes();
  }

}
