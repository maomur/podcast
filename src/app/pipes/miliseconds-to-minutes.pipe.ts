import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'milisecondsToMinutes'
})
export class MilisecondsToMinutesPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {

    let totalSeconds = Math.floor(value / 1000);

    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let formattedHours = String(hours).padStart(2, '0');
    let formattedMinutes = String(minutes).padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}`;
  }


}
