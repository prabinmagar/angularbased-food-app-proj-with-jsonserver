import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shuffle'
})
export class ShufflePipe implements PipeTransform {

  transform(value: any[]): any[] {
    if(!Array.isArray(value)){
      return value; // if the input is not an array
    }

    let currentIndex = value.length;
    let temporaryValue: any;
    let randomIndex:number;

    while(currentIndex !== 0){
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      temporaryValue = value[currentIndex];
      value[currentIndex] = value[randomIndex];
      value[randomIndex] = temporaryValue;
    }

    return value;
  }

}
