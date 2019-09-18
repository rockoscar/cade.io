import { Component, OnInit } from '@angular/core';
import { UserService } from '../../servicios/usuario-servicios';
import { User } from '../../models/usuario/usuario';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-buscador-usuarios',
  templateUrl: './buscador-usuarios.component.html',
  styleUrls: ['./buscador-usuarios.component.css']
})
export class BuscadorUsuariosComponent implements OnInit {

  public titulo;
  public titulo2;
  public usuarios: User;
  public identity;
  constructor(
    private _UserService: UserService,
    private _route: ActivatedRoute,
            private _router: Router
  ) { 
    this.titulo="Buscador"
    this.titulo2="Usuarios"
    this.usuarios =[];
  }

  ngOnInit() {

     this.identity = this._UserService.getIdentity();
    
      if(this.identity){
         //console.log(this.identity);
        if(this.identity.role != 4 && this.identity.role != 3){
          alert('No cuentas con los privilegios');
          this._router.navigate(['/edita']);
        }else{
          this.listado();
        }

      }else{
        alert('Debes iniciar sesión primero, pillo');
        this._router.navigate(['/login']);
      }

    
  }

  listado(){
    this._UserService.usuarios().subscribe(
              //res del api
              response => {
                  //la respuesta del api manda conforme el nombre que se haya usado en el api
                  //en este caso se llamo usuario
                  //valida que exista el objeto y una propiedad del objeto en la res
                  if(!response.usuarios){
                  }else{
                    this.usuarios = response.usuarios;
                  }
                  },
              error => {
                //console.log(<any>error);
                alert('Error, no puedes mirar esto');
                this._router.navigate(['/login']);
              }
    );
  }

  borraUsuario(id){
  $('#elimina-'+id).modal("hide");
  this._UserService.borraUsuario(id).subscribe(
    response =>{
      if(!response.usuario){
          alert('Error en el servidor')
      }
      
      this.listado();
    },
    error =>{
        alert('Error en el servidor')
    }
  );
}

}