import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multi'
})
export class MultiPipe implements PipeTransform {

  transform(value: number, multi = 1): number {
    return value * multi;
  }

}
