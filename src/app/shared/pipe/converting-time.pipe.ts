import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertingTime'
})
export class ConvertingTimePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    const hours: number = Math.floor((value / 60));
    const minutes: number = value % 60;
    return `${hours}h ${minutes}min`;
  }

}
