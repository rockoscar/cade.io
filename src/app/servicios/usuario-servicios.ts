import { Injectable } from'@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
//import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
//import { map } from 'rxjs/operators';
import { Observable } from'rxjs/Observable';
//para la url
import { GLOBAL } from './global';

//usamos la propiedad para inyectar datos
@Injectable()
//clase a exportar
export class UserService{
    public url: string;
    public identity;
    public token;
    
    //es de un servicio
    constructor(private _http: Http){
        //con la url que viene de global
        this.url=GLOBAL.url;
    }
    
    //metodo registro
    registro(usuario_registrar){
      //registro(){  
        //return "mensaje desde registro";

        //el parametro que es un objeto del usuario lo hace un json para la api
        let params = JSON.stringify(usuario_registrar);
        //crea los encabezados para la api e indica su tipo
        let headers = new Headers({'Content-Type': 'application/json',
          'Authorization': this.getToken()
          });
        //manda a la direccion del api, indicando que url requieres y se pasan los
        //datos dentro de los encabezados 
        return this._http.post(this.url+'registro', params, {headers: headers})
                //obtiene la res del api convertida en json para la lectura en el front
                .map(res => res.json());    
    }

    signup(user_to_login, gettoken = null){
        if(gettoken != null){
            user_to_login.gettoken = gettoken;
        }
        let params = JSON.stringify(user_to_login);
        let headers = new Headers ({ 'Content-Type': 'application/json'});

        return this._http.post(this.url+'login', params, {headers: headers})
                .map(res => res.json());
    }

    getIdentity(){
        //crea la variable y guarda lo que encuentre en el local, convirtiendolo en un json usable
        let identity = JSON.parse(localStorage.getItem('identity'));
        //si no esta vacio lo guarda
        if(identity != "undefined"){
            this.identity = identity;
        }else{
            this.identity = null;
        }

        return this.identity;
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

    updateUser(user_to_update){
        //crea la variable y carga el obejto que recibe
        let params = JSON.stringify(user_to_update);
        //crea el arreglo de los encabezados
        let headers = new Headers ({
            'Content-Type': 'application/json',
            //se manda la cabecera el token en la etiqueta que requiere la api
            'Authorization': this.getToken()
        });
        //manda la url con los datos requeridos por la api
        return this._http.put(this.url+'actualiza-usuario/'+user_to_update._id, params, {headers: headers})
                //la respuesta la devuelve 
                .map(res => res.json());
    }

    updatePass(user){
        //crea la variable y carga el obejto que recibe
        let params = JSON.stringify(user);
        //crea el arreglo de los encabezados
        let headers = new Headers ({
            'Content-Type': 'application/json',
            //se manda la cabecera el token en la etiqueta que requiere la api
            'Authorization': this.getToken()
        });
        //manda la url con los datos requeridos por la api
        return this._http.put(this.url+'actualiza-pass/'+user._id, params, {headers: headers})
                //la respuesta la devuelve 
                .map(res => res.json());
    }


  usuarios(){

    let headers = new Headers ({
            'Content-Type': 'application/json',
            //se manda la cabecera el token en la etiqueta que requiere la api
            'Authorization': this.getToken()
        });
    return this._http.get(this.url+'usuarios', {headers: headers})
                //la respuesta la devuelve 
                .map(res => res.json());
    }


  //para el edita usuarios
  usuario(id){
    return this._http.get(this.url+'usuario-id/'+id)
                //la respuesta la devuelve 
                .map(res => res.json());
}

  actualizaUsuarios(user_to_update){
        //crea la variable y carga el obejto que recibe
        let params = JSON.stringify(user_to_update);
        //crea el arreglo de los encabezados
        let headers = new Headers ({
            'Content-Type': 'application/json',
            //se manda la cabecera el token en la etiqueta que requiere la api
            'Authorization': this.getToken()
        });
        //manda la url con los datos requeridos por la api
        return this._http.put(this.url+'actualiza-usuarios/'+user_to_update._id, params, {headers: headers})
                //la respuesta la devuelve 
                .map(res => res.json());
    }

    borraUsuario(id){
        let headers = new Headers ({
                  'Content-Type': 'application/json',
                  
                  'Authorization': this.getToken()
                                  }); 
        let options = new RequestOptions ({headers: headers});
        return this._http.delete(this.url+'borra-usuario/' + id, options)
                          .map(res => res.json());
      }

}