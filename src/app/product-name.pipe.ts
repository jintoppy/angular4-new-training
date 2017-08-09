import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productName'
})
export class ProductNamePipe implements PipeTransform {

  transform(str: any): any {
    if(str){
      //const newval = str.substr(0, 2).toUpperCase() + str.substr(2, str.length).toLowerCase()
      return `Product: ${str}`;
    }
    return str;
  }

}
