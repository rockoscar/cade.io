import { Injectable } from'@angular/core';

//import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
//import { map } from 'rxjs/operators';
import { Observable } from'rxjs/Observable';
//para la url
import { GLOBAL } from './global';

import { Formula } from '../models/formula/formula';

import { Http, Response, Headers, RequestOptions } from '@angular/http';

//usamos la propiedad para inyectar datos
@Injectable()
//clase a exportar
export class FormulaServicio{
    public url: string;
    public identity;
    public token;
    
    //es de un servicio
    constructor(private _http: Http){
        //con la url que viene de global
        this.url=GLOBAL.urlSinApi;
    }

 getToken(){
        //crea variable y guarda el local sencillo por que es un string
        
        let token = localStorage.getItem('token');

        if(token != "undefined"){
            this.token = token;
        }else{
            this.token = null;
        }

        return this.token;

    }


agregaFormula(formulaAgregar){
        //crea la variable y carga el obejto que recibe
        let params = JSON.stringify(formulaAgregar);
        //crea el arreglo de los encabezados
        let headers = new Headers ({
            'Content-Type': 'application/json',
            //se manda la cabecera el token en la etiqueta que requiere la api
            'Authorization': this.getToken()
        });
        //manda la url con los datos requeridos por la api
        return this._http.post(this.url+'guarda-formula/', params, {headers: headers})
                //la respuesta la devuelve 
                .map(res => res.json());
    }




muestraFormula(numero){
        //crea la variable y carga el obejto que recibe
        let body = JSON.stringify(numero);
        //crea el arreglo de los encabezados
        
        let headers = new Headers ({
            'Content-Type': 'application/json',
            //se manda la cabecera el token en la etiqueta que requiere la api
            'Authorization': this.getToken()
        });
        
       let request_option = new RequestOptions();
       request_option.body = body;
  
 
        

        //manda la url con los datos requeridos por la api
        return this._http.get(this.url+'muestra-formulas', request_option)
                //la respuesta la devuelve 
                .map(res => res.json());
    }


formulas(){
    return this._http.get(this.url+'formulas')
                //la respuesta la devuelve 
                .map(res => res.json());
}

formula(id){
    return this._http.get(this.url+'formula-id/'+id)
                //la respuesta la devuelve 
                .map(res => res.json());
}

actualiza1Formula(id, cambio){
        //crea la variable y carga el obejto que recibe
        let params = JSON.stringify(cambio);
        //crea el arreglo de los encabezados
        let headers = new Headers ({
            'Content-Type': 'application/json',
            //se manda la cabecera el token en la etiqueta que requiere la api
            'Authorization': this.getToken()
        });
        //manda la url con los datos requeridos por la api
        return this._http.put(this.url+'actualiza1formula/'+id, params, {headers: headers})
                //la respuesta la devuelve 
                .map(res => res.json());
    }

cambio(cambio){
    let params = JSON.stringify(cambio);
    return this._http.get(this.url+'cambio-id', params)
                //la respuesta la devuelve 
                .map(res => res.json());
}

borraFormula(id){
  let headers = new Headers ({
            'Content-Type': 'application/json',
            
            'Authorization': this.getToken()
                            }); 
  let options = new RequestOptions ({headers: headers});
  return this._http.delete(this.url+'borra-formula/' + id, options)
                    .map(res => res.json());
}


//para mostrar cuantas formulas ha hecho cada usario en detalle de usaurio
formulaUsuario(id){
    return this._http.get(this.url+'formula-usuario/'+id)
                //la respuesta la devuelve 
                .map(res => res.json());
}



}