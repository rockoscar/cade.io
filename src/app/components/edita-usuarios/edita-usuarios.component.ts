import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../servicios/usuario-servicios';
import { User } from '../../models/usuario/usuario';

@Component({
  selector: 'app-edita-usuarios',
  templateUrl: './edita-usuarios.component.html',
  styleUrls: ['./edita-usuarios.component.css']
})
export class EditaUsuariosComponent implements OnInit {

  public usuario: User; 
  public status;
  public cambiaPass: boolean;
  public pass;
  public pass2: String;
  public validaPass: boolean;
  public mensaje: String;
  public title;

  constructor(
    private _UserService: UserService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    this.usuario= new User();
    this.cambiaPass = false;
    this.validaPass = false;
    this.title="Actualiza usuario";
  }

  ngOnInit() {
    this.obtenUsuario();
  }

  obtenUsuario(){
    this._route.params.forEach((params: Params) => {
    let id =  params['id'];
    this._UserService.usuario(id).subscribe(
         response => {
           if(!response.usuario){
             
           }else{
             
              this.usuario = response.usuario;
                //console.log(this.usuario); 
           }
         },
         error =>{
            console.log(<any>error); 
            this._router.navigate(['/']);
         }
       )
    });
  }

  //manda el cambio en datos del usuario
  onSubmit(){
    this._UserService.actualizaUsuarios(this.usuario).subscribe(
        		response =>{
        			if(!response.usuario){
        				this.status ='error';
        			}else{
        				//console.log(response.usuario);
        				//cargamos en local los datos del objeto, antes lo convertimos en un json
        				//localStorage.setItem('identity', JSON.stringify(this.usuario));
        				this.status='exitoso'
                alert("Has actualizado la información correctamente =)");
                this._router.navigate(['/buscador-usuarios']);
                //this._router.navigate(['/mis-datos']);
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

  pideCambio(){
    this.cambiaPass = true;
  }

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
              this.usuario.password = this.pass;
      this._UserService.updatePass(this.usuario).subscribe(
        		response =>{
        			if(!response.usuario){
        				this.status ='error';
                console.log("primer");

        			}else{
        				//console.log(response.usuario);
        				//cargamos en local los datos del objeto, antes lo convertimos en un json
        				//localStorage.setItem('identity', JSON.stringify(this.user));
        				this.status='exitoso'
                alert("Has actualizado la contraseña correctamente =)");
                this._router.navigate(['/buscador-usuarios']);
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

}