import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombre'
})

@Injectable()
export class UsuariosNombrePipe implements PipeTransform{
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
      return item.name.toLowerCase().includes(term.toLowerCase());
      
    });
  }
}

@Pipe({
  name: 'numero'
})

@Injectable()
export class UsuariosNumeroPipe implements PipeTransform{
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
      return item.numero.includes(term);
      
    });
  }
}

@Pipe({
  name: 'apellido'
})

@Injectable()
export class UsuariosApellidoPipe implements PipeTransform{
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
      return item.surname.toLowerCase().includes(term.toLowerCase());
      
    });
  }
}

@Pipe({
  name: 'departamento'
})

@Injectable()
export class UsuariosDepartamentoPipe implements PipeTransform{
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
      return item.departamento.toLowerCase().includes(term.toLowerCase());
      
    });
  }
}

