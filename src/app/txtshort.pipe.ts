import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'txtshort'
})
export class TxtshortPipe implements PipeTransform {

  transform(value: string, reduce = 0): string {
    if(value.length > reduce) {
      value = value.substring(0, reduce);
      return value + "...";
   }
    return value
  }

}
