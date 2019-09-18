import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
//importamos la clase del modelo
import { User } from '../../models/usuario/usuario';

import { GLOBAL } from '../../servicios/global';
//exporta la clase del servicio usuarios
import { UserService } from'../../servicios/usuario-servicios';

@Component({
  selector: 'app-edita-usuario',
  templateUrl: './edita-usuario.component.html',
  styleUrls: ['./edita-usuario.component.css'],
  providers: [UserService]
})
export class EditaUsuarioComponent implements OnInit {
  public title: String;
  public user: User;
  public status;
  public identity;
  public cambiaPass: boolean;
  public pass;
  public pass2: String;
  public validaPass: boolean;
  public mensaje: String;
  constructor(
    private _userService: UserService,
    private _router: Router
  ) { 
    this.title = "Acutaliza tus datos";
    	this.identity = _userService.getIdentity();
			this.user = this.identity;
      this.cambiaPass = false;
      this.validaPass = false;
     // this.pass = "";
  }

  ngOnInit() {
    
  }
  //activa los campos de las contraeñas
  pideCambio(){
    this.cambiaPass = true;

  }
  //manda el cambio en la contraseña
  mandaCambio(passUpdate){

    if(!this.pass || !this.pass2 ){
      this.validaPass=true;
      passUpdate.reset();
      this.mensaje = "Debes llenar los dos campos";
    }else{
      if(this.pass != this.pass2){
      this.validaPass=true;
      passUpdate.reset();
      this.mensaje = "Las contraseñas no coincinden";
      } else{
              this.user.password = this.pass;
      this._userService.updatePass(this.user).subscribe(
        		response =>{
        			if(!response.usuario){
        				this.status ='error';
                console.log("primer");

        			}else{
        				//console.log(response.usuario);
        				//cargamos en local los datos del objeto, antes lo convertimos en un json
        				localStorage.setItem('identity', JSON.stringify(this.user));
        				this.status='exitoso'
                this._router.navigate(['/edita']);
        			}

        			//subida de image
        		},
        		error => {
        			var errorMensaje = <any>error;
              
        			if(errorMensaje != null){
        				this.status ='error';
                
        			}
        		}
        	);
      }
    }      
  }

  //manda el cambio en datos del usuario
  onSubmit(){
    this._userService.updateUser(this.user).subscribe(
        		response =>{
        			if(!response.usuario){
        				this.status ='error';
        			}else{
        				//console.log(response.usuario);
        				//cargamos en local los datos del objeto, antes lo convertimos en un json
        				localStorage.setItem('identity', JSON.stringify(this.user));
        				this.status='exitoso'
                this._router.navigate(['/mis-datos']);
        			}

        			//subida de image
        		},
        		error => {
        			var errorMensaje = <any>error;
        			if(errorMensaje != null){
        				this.status ='error';
        			}
        		}
        	);
  }
}