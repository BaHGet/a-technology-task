import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'purchasesTimes',
  standalone: true
})
export class PurchasesTimesPipe implements PipeTransform {

  transform(value: number): string {
    if (value === 1) {
      return 'مرة واحدة';
    }
    if (value === 2) {
      return 'مرتين';
    }
    else{
      return ` ${value} مرات`;
    }
  }

}
