import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscaLote'
})

@Injectable()
export class BuscaLotePipe implements PipeTransform{
  //items el arreglo que obtiene 
  //term temrino de busqueda
  // el ultimo any indica que devolvera un objeto de tipo any
  transform(items: any, term: any):any {
    if(term === undefined){
      return items;
    }
    //hace la funcion de filtro iterando cada item
    return items.filter(function(item){
      //devuelve los valores encontrados
      return item.lote.includes(term);
      
    });
  }
}