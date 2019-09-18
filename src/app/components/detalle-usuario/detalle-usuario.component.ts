import { Component, OnInit } from '@angular/core';
import { FormulaServicio } from '../../servicios/formula-servicios';
import { Formula } from '../../models/formula/formula';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  providers: [FormulaServicio],
  styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent implements OnInit {

  public formulas: Formula;
  public formulasFiltro: Formula;
  public titulo;
  
  constructor(
    private _FormulaService: FormulaServicio,
    private _route: ActivatedRoute,
    private _router: Router

  ) { 
    this.titulo="Datos del usuario "
    this.formulas=[];
    this.formulasFiltro=[];
  }

  ngOnInit() {
    this.obtenUsuario();
  }

    obtenUsuario(){

        this._route.params.forEach((params: Params) => {
       let id =  params['id'];
       this._FormulaService.formulaUsuario(id).subscribe(
         response => {
           if(!response.formulas){
             
           }else{
             
              this.formulas = response.formulas;
              
                for(let i =0; i<this.formulas.length; i++ ){
                    if(this.formulas[i].usuario != null){
                      this.formulasFiltro.push(this.formulas[i]);
                    }
                }

                if(this.formulasFiltro.length == 0){
                  alert("El usuario no tiene actividad");
                  this._router.navigate(['/buscador-usuarios']);
                }
                
                



                //console.log(this.formulasFiltro); 
           }
         },
         error =>{
            console.log(<any>error); 
            this._router.navigate(['/']);
         }
       )
    });
   
    }
}


