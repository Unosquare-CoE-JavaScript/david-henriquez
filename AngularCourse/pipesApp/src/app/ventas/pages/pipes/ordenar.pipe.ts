import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../ordenar/ordenar.component';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(value: Heroe[], orderBy:string = ''): Heroe[] {

    if(orderBy==='') return value
    if(orderBy==='nombre'){
        value = value.sort((a,b)=>(a.nombre>b.nombre)?1:-1);
    }

    if(orderBy==='vuela') {
      value = value.sort((a,b)=>(a.vuela>b.vuela)?1:-1);
    }

    if(orderBy==='color'){
      value = value.sort((a,b)=>(a.color>b.color)?1:-1);
    }

    return value;
  }

}
