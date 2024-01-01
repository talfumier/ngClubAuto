import { Pipe, PipeTransform } from '@angular/core';

@Pipe({  
  name: 'roundToNearest'
})
export class RoundToNearestPipe implements PipeTransform {

  transform(value: number, nearest:number): number {
    return Math.ceil(value/nearest)*nearest ;

  }

}
