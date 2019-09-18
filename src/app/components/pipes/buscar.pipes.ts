import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscar'
})

@Injectable()
export class BuscarPipe implements PipeTransform{
  //items el arreglo que obtiene 
  //term temrino de busqueda
  // el ultimo any indica que devolvera un objeto de tipo any
  transform(items: any, term: any):any {
   
    if(term === undefined ){
      return items;
    }
    
      //return items.filter(function(item){
        return items.filter(function(item){
        var y = term.toLowerCase()
       var x= item.codigo.toLowerCase()
      //devuelve los valores encontrados
      return x.includes(y);
     //return item.includes(term);
      
    });
    
    
    
    //hace la funcion de filtro iterando cada item
    
  }
}

//ya no se usa
@Pipe({
  name: 'buscarS'
})

@Injectable()
export class BuscarSPipe implements PipeTransform{
  //items el arreglo que obtiene 
  //term temrino de busqueda
  // el ultimo any indica que devolvera un objeto de tipo any
  transform(items: any, term: any):any {
    if(term == ""){
      return items;
    }
    var y = term.toLowerCase()
    //hace la funcion de filtro iterando cada item
     return items.filter(function(item){
      
     // var y = term.toLowerCase()
       var x= item.codigo.toLowerCase()
      //devuelve los valores encontrados
      //return item.codigo == term;
      return x.includes(y);
      
    });
  }
}

//suma puros rechazos
@Pipe({
  name: 'sumaR'
})
@Injectable()
export class sumaRPipe implements PipeTransform{
  //items el arreglo que obtiene 
  //term temrino de busqueda
  // el ultimo any indica que devolvera un objeto de tipo any
  transform(items: any, re: any):any {
     
    let t = items.length;
    let tot= 0;

    while(t--)
    tot += items[t][re];
    //hace la funcion de filtro iterando cada item
    return tot;
    
  }
}

//suma analisis
@Pipe({
  name: 'sumaAnalisis'
})
@Injectable()
export class sumaAnalisisPipe implements PipeTransform{
  //items el arreglo que obtiene 
  //term temrino de busqueda
  // el ultimo any indica que devolvera un objeto de tipo any
  transform(items: any, ncambios: any):any {
     
    let t = items.length;
    let tot= 0;

    while(t--)
    tot += items[t][ncambios];
    //hace la funcion de filtro iterando cada item
    return tot;
    
  }
}

@Pipe({
  name: 'promeR'
})
@Injectable()
export class promeRPipe implements PipeTransform{

  
  //items el arreglo que obtiene 
  //term temrino de busqueda
  // el ultimo any indica que devolvera un objeto de tipo any

  transform(items: any, re: any):any {
    if(re === undefined ){
      return items;
    }
     
    let t = items.length;
    let tot= 0;
    while(t--)
    tot += items[t][re];

    let promedio = tot/items.length
    //hace la funcion de filtro iterando cada item
    return promedio.toFixed(3);
    
  }
}

//ya no se usa fue rempleazado por codRanFin
@Pipe({
  name: 'codRan'
})

@Injectable()
export class codRan implements PipeTransform {

  transform(values: any, args?: any): any {
    //transform(values: any, args?: any, arg1?: any): any {
    //let newDate = new Date(args);
    
    //let newDate1 = new Date(arg1);
    if(args === undefined ){
      return values;
    }
    else{
      if(args==""){
         return values;
      }
      else{
              if(args>0){
            return values.filter(function(value){
            //devuelve los valores encontrados
            var entrada =+args
            var x = value.codigo

            if(x>=entrada)
          return  x
          });
          }
          else{
            return values.filter(function(value){
              var y = args.toLowerCase()
            var x= value.codigo.toLowerCase()
            //devuelve los valores encontrados
            return x.includes(y);
            });
          }
      }
    }
   
      
    
  }

}


//saca rangos de codigos
@Pipe({
  name: 'codRanFin'
})

@Injectable()
export class codRanFin implements PipeTransform {
transform(values: any, args?: any): any {
    //transform(values: any, args?: any, arg1?: any): any {
    //let newDate = new Date(args);
    
    //let newDate1 = new Date(arg1);
    if(args === undefined ){
      return values;
    }
    else{
      
      if(args==""){
        return values;
      }
      else{
        if(args>0){
          return values.filter(function(value){
      //devuelve los valores encontrados
      var entrada =+args
      var x = value.codigo

      if(x<=entrada){
         return  x;
      }
    
     });
        }
        else{
          return values.filter(function(value){
        var y = args.toLowerCase()
       var x= value.codigo.toLowerCase()
      //devuelve los valores encontrados
      return x.includes(y);
      });
        }
        
      }
       
    }
  }

}

@Pipe({
  name: 'totalFormulas'
})
@Injectable()
export class totalFormulasPipe implements PipeTransform{
  //items el arreglo que obtiene 
  //term temrino de busqueda
  // el ultimo any indica que devolvera un objeto de tipo any
  transform(items: any):any {
    return items.length;
  }
}


@Pipe({
  name: 'bienPrimera'
})
@Injectable()
export class bienPrimeraPipe implements PipeTransform{
  //items el arreglo que obtiene 
  //term temrino de busqueda
  // el ultimo any indica que devolvera un objeto de tipo any
   transform(items: any):any {
     
    let t = items.length;
    let tot= 0;
    while(t--){
     //MODIFCACION PARA PASTAS
      if(items[t]['rechazos']== 0 && items[t]['status']== 'Aprobada')
      tot ++
    }
    return tot;
    
  }
}

@Pipe({
  name: 'bienPrimeraPorcen'
})
@Injectable()
export class bienPrimeraPorcenPipe implements PipeTransform{
  //items el arreglo que obtiene 
  //term temrino de busqueda
  // el ultimo any indica que devolvera un objeto de tipo any
   transform(items: any):any {
     
    let t = items.length;
    let tot = 0;
    let por = 0;
    while(t--){
      //MODIFICACION PARA PASTAS
      if(items[t]['rechazos']== 0 && items[t]['status']== 'Aprobada')
      tot ++
    }
    if(tot!=0){
      por = (tot*100)/items.length;
    }
    return por.toFixed(2);
    
  }
}

@Pipe({
  name: 'estatus'
})
@Injectable()
export class estatusPipe implements PipeTransform{
  //items el arreglo que obtiene 
  //term temrino de busqueda
  // el ultimo any indica que devolvera un objeto de tipo any
   transform(items: any, term: any):any {
     

   if(term === undefined ){
      return items;
    }
    
      //return items.filter(function(item){
        return items.filter(function(item){
        var y = term.toLowerCase()
       var x= item.status.toLowerCase()
      //devuelve los valores encontrados
      return x.includes(y);
     //return item.includes(term);
    });    
  }
}

@Pipe({
  name: 'bienSegunda'
})
@Injectable()
export class bienSegundaPipe implements PipeTransform{
  //items el arreglo que obtiene 
  //term temrino de busqueda
  // el ultimo any indica que devolvera un objeto de tipo any
   transform(items: any):any {
     
    let t = items.length;
    let tot= 0;
    while(t--){
      if(items[t]['rechazos']== 1 && items[t]['status']== 'Aprobada' )
      tot ++
    }

    return tot;
    
  }
}

@Pipe({
  name: 'bienSegundaPorcen'
})
@Injectable()
export class bienSegundaPorcenPipe implements PipeTransform{
  //items el arreglo que obtiene 
  //term temrino de busqueda
  // el ultimo any indica que devolvera un objeto de tipo any
   transform(items: any):any {
     
    let t = items.length;
    let tot = 0;
    let por = 0;
    while(t--){
         if(items[t]['rechazos']== 1 && items[t]['status']== 'Aprobada' )
        tot ++

        if(items[t]['rechazos']== 0 && items[t]['status']== 'Pendiente')
        tot ++
    }
    if(tot!=0){
      por = (tot*100)/items.length;
    }
    return por.toFixed(2);
    
  }
}