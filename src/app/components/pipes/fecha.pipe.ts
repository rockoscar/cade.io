import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'fecha'
})

@Injectable()
export class FechaPipe implements PipeTransform {

  transform(values: any, args?: any): any {
    //transform(values: any, args?: any, arg1?: any): any {
    let newDate = new Date(args);

    //let newDate1 = new Date(arg1);
    if(args === undefined ){
      return values;
    }
    if(args === "" ){
      return values;
    }
/*
        return args
         ? values.filter(value => value.cambio[0].fecha >= args) 
         : values;
            }
         */
         
  



    //return values.filter(function(value){
       return values.filter(function(value){
      //devuelve los valores encontrados
     return  value.cambio[0].fecha>=args
     // return value.cambio[0].fecha>args ? value.cambio[0].fecha.includes(args) : value;
      
    });
  }

}