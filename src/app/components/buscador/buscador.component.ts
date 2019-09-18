import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Formula } from '../../models/formula/formula';
import { Cambio } from '../../models/cambio/cambio';
import { FormulaServicio } from '../../servicios/formula-servicios';
import { UserService } from  '../../servicios/usuario-servicios';

@Component({
  selector: 'buscador',
  templateUrl: './buscador.component.html',
  providers: [FormulaServicio],
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  public formulas: Formula[];
  public formulasFiltrado: Formula;
  public cambios: Cambio;
  public aprobado: boolean;
  public buscaform: String;
  public Blote: String;
  public Belaborado: String;
  public fecha: Date;
  public fechatermino: Date;
  public teclado: boolean;

  public titulo: String;
  public titulo2: String;
  public identity;

  @Output () pasameFormula = new EventEmitter();
  @Output () encon = new EventEmitter();
  

  constructor(
    private _userService: UserService,
    private _FormulaServicio: FormulaServicio,
    private _router: Router
  ) {
    //this.formGral = new Formula("");
    this.encontrado =false;

    this.titulo = "Buscador";
    this.titulo2 = "Listado de fórmulas";
    this.formulasFiltrado =[];
    this.cambios =[];
    this.teclado = false;
   }

  ngOnInit() {

    this.identity = this._userService.getIdentity();
    
      if(this.identity){
         //console.log(this.identity);
        if(this.identity.role >= 1){
          this.listado()
        }

      }else{
        alert('Debes iniciar sesión primero, pillo');
        this._router.navigate(['/login']);
      }

    
    
  }

buscador(){
  
  console.log(this.buscaform);

  //usamos el servicio que hara la req al api, mandando el objeto llenado en el form
        this._FormulaServicio.formulas().subscribe(
              //res del api
              response => {
                  //la respuesta del api manda conforme el nombre que se haya usado en el api
                  //en este caso se llamo usuario
                  //valida que exista el objeto y una propiedad del objeto en la res
                  if(response.formulas && response.formulas._id){
                      //this.user= response.user;
                    //this.formu = response.formula;
                    console.log(response)
                     
                     //this._router.navigate(['/edita']);
                      //cambia el status
                      //this.status='Exitoso';
                      //resetea el objeto usuario
                      //this.user= new User ('', '', '', '','','ROLE_USER', '', '');
                      //limpia el registro
                      //registerForm.reset();
                  
                  }else{
                      alert("Formula no encontrada");
                      console.log(response)
                      //this.status='Error';
                  }
              
                  
              },
              error => {
                  console.log(<any>error);
              }
            );




  /*
  this.formGral= JSON.parse(localStorage.getItem('formGral')) ;
  
  
  
  if(this.buscaform == this.formGral.numForm){
      this.encontrado = true;
      this.pasameFormula.emit({
        "formGral": this.formGral
      })

      this.encon.emit({
        "encontradobusqueda": this.encontrado
      })
      


  }
  else{
    alert("No se ha encontrado la formula")
    this.encontrado = false;
    this.encon.emit({
        "encontradobusqueda": this.encontrado
      })
  }
  */


}

buscas(){
  this.teclado = true;
 // console.log(this.fechatermino);
}



borraFormula(id){
  $('#elimina-'+id).modal("hide");
  this._FormulaServicio.borraFormula(id).subscribe(
    response =>{
      if(!response.formula){
          alert('Error en el servidor')
      }
      this.formulasFiltrado =[];
      this.listado();
    },
    error =>{
        alert('Error en el servidor')
    }
  );
}

listado(){
  this._FormulaServicio.formulas().subscribe(
              //res del api
              response => {
                  //la respuesta del api manda conforme el nombre que se haya usado en el api
                  //en este caso se llamo usuario
                  //valida que exista el objeto y una propiedad del objeto en la res
                  if(!response.formulas){
                  }else{
                    this.formulas = response.formulas;
                    //console.log(this.formulas);
                    for(let  i = 0; i<this.formulas.length; i++){
                      this.aprobado=false;
                      if(this.formulas[i].cambio != null)
                      this.cambios.push(this.formulas[i].cambio);
                      if(this.formulas[i].cambio1 != null)
                      this.cambios.push(this.formulas[i].cambio1);
                      if(this.formulas[i].cambio2 != null)
                      this.cambios.push(this.formulas[i].cambio2);
                      if(this.formulas[i].cambio3 != null)
                      this.cambios.push(this.formulas[i].cambio3);
                      if(this.formulas[i].cambio4 != null)
                      this.cambios.push(this.formulas[i].cambio4);
                      if(this.formulas[i].cambio5 != null)
                      this.cambios.push(this.formulas[i].cambio5);
                      if(this.formulas[i].cambio6 != null)
                      this.cambios.push(this.formulas[i].cambio6);
                      if(this.formulas[i].cambio7 != null)
                      this.cambios.push(this.formulas[i].cambio7);
                      if(this.formulas[i].cambio8 != null)
                      this.cambios.push(this.formulas[i].cambio8);
                      if(this.formulas[i].cambio9 != null)
                      this.cambios.push(this.formulas[i].cambio9);
                      this.formulas[i].cambio = this.cambios; 
                       for(let  c = 0; c<this.cambios.length; c++){   
                          if(this.cambios[c].status == "Aprobado"){
                              this.aprobado = true;

                          }
                       }
                       // console.log(this.cambios);
                        this.cambios=[];
                       //console.log(this.formulas[i]);
                       if(this.aprobado == false){
                        this.formulas[i].status = "rechazado";
                         this.formulasFiltrado.push(this.formulas[i]); 
                       }
                        //this.formulas[i].status = "rechazado";
                        
                        //console.log(this.formulasFiltrado); 
                       }//hasta aqui separa los cambios por cada formula    
                  }
              },
              error => {
                console.log(<any>error);
              }
    );
}

}