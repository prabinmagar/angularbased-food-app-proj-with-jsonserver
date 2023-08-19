import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceAndCapitalizeString'
})
export class ReplaceAndCapitalizeStringPipe implements PipeTransform {

  transform(value: string): string {
    const replacedString = value.replace("-", " ");
    const capitalizedString = replacedString.charAt(0).toUpperCase() + replacedString.slice(1);
    return capitalizedString;
  }
}
