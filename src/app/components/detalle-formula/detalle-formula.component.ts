import { Component, OnInit, Output, } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Formula } from '../../models/formula/formula';
import { FormulaServicio } from '../../servicios/formula-servicios';
import { GLOBAL } from '../../servicios/global';
import { UserService } from  '../../servicios/usuario-servicios';
import { Cambio } from '../../models/cambio/cambio';

@Component({
  selector: 'app-detalle-formula',
  templateUrl: './detalle-formula.component.html',
  providers: [FormulaServicio, UserService],
  styleUrls: ['./detalle-formula.component.css']
})
export class DetalleFormulaComponent implements OnInit {

    public formula: Formula;
    public url: string;
    public edita: boolean;
    public cambio: Cambio;
    public cambio1: Cambio;
    public cambios: Cambio;
    public cuentaAnalisis;
    public identity;

  constructor(
    private _FormulaServicio: FormulaServicio,
    private _UserService: UserService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.url = GLOBAL.urlSinApi;
    this.formula = new Formula();
    //this.cambio = new Cambio();
    //this.cambio1 = new Cambio();
    this.cambios = [];
    this.cuentaAnalisis = 0;
   }

  ngOnInit() {
    this.identity = this._UserService.getIdentity();
    this.obtenFormula();
    console.log(this.identity);
  }

  obtenFormula(){
    this._route.params.forEach((params: Params) => {
       let id =  params['id'];
       this._FormulaServicio.formula(id).subscribe(
         response => {
           if(!response.formula){
             
           }else{
             this.formula = response.formula;
             //this.cambio._id = response.formula.cambio._id;
             this.cambios.push(response.formula.cambio);

             if(response.formula.cambio1 != null)
             this.cambios.push(response.formula.cambio1);
             if(response.formula.cambio2 != null)
             this.cambios.push(response.formula.cambio2);
             if(response.formula.cambio3 != null)
             this.cambios.push(response.formula.cambio3);
             if(response.formula.cambio4 != null)
             this.cambios.push(response.formula.cambio4);
             if(response.formula.cambio5 != null)
             this.cambios.push(response.formula.cambio5);
             if(response.formula.cambio6 != null)
             this.cambios.push(response.formula.cambio6);
             if(response.formula.cambio7 != null)
             this.cambios.push(response.formula.cambio7);
             if(response.formula.cambio8 != null)
             this.cambios.push(response.formula.cambio8);
             if(response.formula.cambio9 != null)
             this.cambios.push(response.formula.cambio9);

              //this.formula.cambio = this.cambios;
             //this.cambios = response.formula.cambio1;
             //console.log(this.cambios);
               for(let  i = 0; i<this.cambios.length; i++){

                  this.cambios[i].cuentaAnalisis = i +1;
                  //console.log(this.cambios[i].length); 
                  if(this.cambios[i].status=='Aprobado' || response.formula.cambio9 != null )
                  this.edita = true;
               }
                 
           }
         },
         error =>{
            //console.log(<any>error); 
            this._router.navigate(['/']);
         }
       )
    });
  }

  

}





