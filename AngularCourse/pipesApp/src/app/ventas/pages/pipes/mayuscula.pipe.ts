import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayuscula'
})
export class MayusculaPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    const sw=args[0];
    if(sw){
      return value.toUpperCase();
    }else{
      return value.toLowerCase();
    }


  }

}
