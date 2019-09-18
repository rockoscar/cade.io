import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../servicios/usuario-servicios';
import { User } from '../../models/usuario/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [UserService],
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public titulo: String;
    public user: User;
    public identity;
    public token;
    public status: String;

  constructor(
    private _route: ActivatedRoute,
            private _router: Router,
            private _userService: UserService
  ) { 
    this.titulo='Identificate';
            this.user= new User ();
  }

  ngOnInit() {
    //si ya esta logeado no manda a otra dirección
    this.identity = this._userService.getIdentity();
    
      if(this.identity){
         this._router.navigate(['/edita']);

      }
        
    
  }
  onSubmit(loginForm){
    
        //console.log(this.user);
        //logear el usuario y obtener el objeto
        this._userService.signup(this.user).subscribe (
            response => {
                this.identity = response.usuariob;
                //this.identity.password ='';
                localStorage.setItem('identity', JSON.stringify(this.identity));
                //console.log(this.identity);
                //valida que exista el objeto y que tenga un id
                if(!this.identity || !this.identity._id){
                    
                    alert('El usuario no se ha logeado correctamente');
                }else{
                    //mostrar el identity
                                //console.log(this.identity);

                        //conseguir el tokken
                        //llamamos al servicio ahora con el parametro para obtener el token true
                        this._userService.signup(this.user, 'true').subscribe (
                            response => {
                                this.token = response.token;
                                //validamos el token
                            if(this.token.length <= 0){
                                alert('El token no se ha generado correctamente');
                            }else{
                                //mostrar el token
                                //console.log(this.token);
                                localStorage.setItem('token', this.token);
                                this.status='success';

                                this._router.navigate(['/edita']);

                            }
                        },
                        error =>{
                            console.log(<any>error);
                            //console.log("mal");


                            

                        }
                    );
                }
            },
            //en caso de falle el logeo
            error =>{
              loginForm.reset();
                var errorMessage = <any>error;
                if(errorMessage !=  null){
                    var body = JSON.parse(error._body);
                    this.status='error';
                    
                }
                
            }
        );
        
    }
    
}