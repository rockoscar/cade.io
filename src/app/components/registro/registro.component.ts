import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { UserService } from '../../servicios/usuario-servicios';
import { User } from '../../models/usuario/usuario';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  providers: [UserService],
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public user: User;
    public status: String;
    public titulo: String;
    public validador: boolean;
    public valid;
    public identity;
  constructor(
            private _route: ActivatedRoute,
            private _router: Router,
            private _userService: UserService
  ) { 
    this.user= new User ('', '', '', '','','', '', '');
    this.titulo = " Ingresa tus datos";
    this.valid = 2;
  }

  ngOnInit() {

   this.identity = this._userService.getIdentity();
    
      if(this.identity){
         //console.log(this.identity);
        if(this.identity.role != 4 && this.identity.role != 3){
          alert('No cuentas con los privilegios');
          this._router.navigate(['/edita']);
        }

      }else{
        alert('Debes iniciar sesión primero, pillo');
        this._router.navigate(['/login']);
      }

  }
  onSubmit(registerForm){

        if (!isNaN(this.user.name)) {
            alert("Nombre incorrecto");
            this.validador = false;
            this.valid = -- this.valid;
          }
          else{
          this.validador = true;
        }

        if (!isNaN(this.user.surname)) {
            alert("Apellido incorrecto");
            this.validador = false;
            this.valid = -- this.valid;
          }
          else{
          this.validador = true;
        }


        if(this.validador && this.valid==2){

           if(this.user.departamento=="Calidad")
        this.user.role = "2";

        if(this.user.departamento=="Desarrollo")
        this.user.role = "1";

        if(this.user.departamento=="Producción")
        this.user.role = "1";

        //usamos el servicio que hara la req al api, mandando el objeto llenado en el form
        this._userService.registro(this.user).subscribe(
              //res del api
              response => {
                  //la respuesta del api manda conforme el nombre que se haya usado en el api
                  //en este caso se llamo usuario
                  //valida que exista el objeto y una propiedad del objeto en la res
                  if(response.usuario && response.usuario._id){
                      //this.user= response.user;

                      //cambia el status
                      this.status='Exitoso';
                      //resetea el objeto usuario
                      this.user= new User ('', '', '', '','', '','');
                      //limpia el registro
                      registerForm.reset();
                  
                  }else{
                      this.status='Error';
                  }
              
                  
              },
              error => {
                  //console.log(<any>error);
                  alert('Debes iniciar sesion primero, travieso');
                  this._router.navigate(['/login']);
              }
            );
        }else{
          this.valid=2;
        }
       
            
            
    }//acaba metodo

}//acaba clase