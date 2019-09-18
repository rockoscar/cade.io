import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscaElaborado'
})

@Injectable()
export class BuscaElaboradoPipe implements PipeTransform{
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
      return item.usuario.name.toLowerCase().includes(term.toLowerCase());
      
    });
  }
}