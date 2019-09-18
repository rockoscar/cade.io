import { Component } from '@angular/core';
import { UserService } from  './servicios/usuario-servicios';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [UserService]
})
export class AppComponent  {
  name = 'Angular';
  public identity;

  constructor(
      private _userService: UserService,
      private _route: ActivatedRoute,
      private _router: Router
    ){}
  

  ngOnInit(){
    this.identity = this._userService.getIdentity();
  }

  //para cada cambio en la app ejecuta el metodo
  ngDoCheck(){
    this.identity = this._userService.getIdentity();
  }

  //para cerrar sesion
  logout(){
    //borra el local storage
    localStorage.clear();
    //borrar la variable 
    this.identity = null;
    //redirecciona al incio
    //this._router.navigate(['/']);
  }
}


