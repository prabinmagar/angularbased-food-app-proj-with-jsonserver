import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emptyObject'
})
export class EmptyObjectPipe implements PipeTransform {

  transform(value:any): boolean {
    if(!value || typeof value !== 'object'){
      return true; // If the value is not an object or is null/undefined, consider it as empty
    }

    return Object.keys(value).length == 0;
  }

}
