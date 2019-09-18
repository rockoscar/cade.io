import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Formula } from '../../models/formula/formula';
import { Cambio } from '../../models/cambio/cambio';
import { UserService } from '../../servicios/usuario-servicios';
import { FormulaServicio } from '../../servicios/formula-servicios';
import { IngresaComponent } from '../ingresa/ingresa.component';

@Component({
  selector: "edita",
  templateUrl: "./edita.component.html",
  providers: [FormulaServicio, UserService],
  styleUrls: ['./edita.component.css']
})
export class EditaComponent implements OnInit {
 public formula: Formula;
 public cambio: Cambio;
 public brillo;
 public densidad;
 public secadotf;
 public secadotfrecd;
 public validador: boolean;
 public valid: number;
public identity;

  constructor(
            private _route: ActivatedRoute,
            private _router: Router,
            private _UserService: UserService,
            private _FormulaServicio: FormulaServicio
  ) {
      this.formula = new Formula();
      this.cambio = new Cambio();
      this.valid = 17; 
    }

 ngOnInit(){
   
     this.identity = this._UserService.getIdentity();
    
      if(this.identity){
         //console.log(this.identity);
        if(this.identity.role == 1){
          alert('No cuentas con los privilegios');
          this._router.navigate(['/edita']);
        }else{
          this.obtenFormula();
        }

      }else{
        alert('Debes iniciar sesión primero, pillo');
        this._router.navigate(['/login']);
      }

    
   
  }



 obtenFormula(){
    this._route.params.forEach((params: Params) => {
       let id =  params['id'];
       this._FormulaServicio.formula(id).subscribe(
         response => {
           if(!response.formula){
             
           }else{
             this.formula = response.formula;
             
           }
         },
         error =>{
            console.log(<any>error); 
            this._router.navigate(['/']);
         }
       )
    });
  }

mandaCambio(){
   
  if (this.cambio.viscosidad) {
        //solo permite numeros y mayores a 0 y alfanumerico
        if (this.cambio.viscosidad <= 0) {
          alert("Viscosidad incorrecta");
          this.validador = false;
          this.valid = -- this.valid;
        }
        else{
          this.validador = true;
          
        }
      }

  if (this.cambio.densidad) {
          //solo permite numeros y mayores a 0
          if (isNaN(this.cambio.densidad) || this.cambio.densidad <= 0) {
            alert("Densidad incorrecta");
            this.validador = false;
            this.valid = -- this.valid;
          }
          else{
          this.validador = true;
          
        }
        }

  if (this.cambio.solidos) {
          //solo permite numeros y mayores a 0
          if (isNaN(this.cambio.solidos) || this.cambio.solidos <= 0) {
            alert("Solidos totales incorrecta");
            this.validador = false;
            this.valid = -- this.valid;
          }
          else{
          this.validador = true;
        }
        }

  if (this.cambio.ph) {
          //solo permite numeros y mayores a 0
          if (isNaN(this.cambio.ph) || this.cambio.ph <= 0) {
            alert("PH incorrecta");
            this.validador = false;
            this.valid = -- this.valid;
          }
          else{
          this.validador = true;
        }
        }

  if (this.cambio.finura) {
          //solo permite numeros y mayores a 0
          if (this.cambio.finura <= 0) {
            alert("Finura incorrecta");
            this.validador = false;
            this.valid = -- this.valid;
          }
          else{
          this.validador = true;
        }
        }

   if (this.cambio.poder) {
          //solo permite numeros y mayores a 0
          if (this.cambio.poder <= 0) {
            alert("Poder cubriente incorrecto");
            this.validador = false;
            this.valid = -- this.valid;
          }
          else{
          this.validador = true;
        }
        }

  if (this.cambio.dureza) {
          //solo permite numeros y mayores a 0
          if (isNaN(this.cambio.dureza) || this.cambio.dureza <= 0) {
            alert("Dureza incorrecta");
            this.validador = false;
            this.valid = -- this.valid;
          }
          else{
          this.validador = true;
        }
        }

  if (this.cambio.brillo) {
          //solo permite numeros y mayores a 0
          if (isNaN(this.cambio.brillo) || this.cambio.brillo <= 0) {
            alert("Brillo incorrecto");
            this.validador = false;
            this.valid = -- this.valid;
          }
          else{
          this.validador = true;
        }
        }                   

   if (this.cambio.secadot) {
          //solo permite numeros y mayores a 0
          if (isNaN(this.cambio.secadot) || this.cambio.secadot <= 0 || !this.secadotf) {
            alert("Secado tacto incorrecto");
            this.validador = false;
            this.valid = -- this.valid;
          }
          else{
          this.validador = true;
        }
        }

  if (this.cambio.secadod) {
          //solo permite numeros y mayores a 0
          if (isNaN(this.cambio.secadod) || this.cambio.secadod <= 0 || !this.secadotfrecd) {
            alert("Secado duro incorrecto");
            this.validador = false;
            this.valid = -- this.valid;
          }
          else{
          this.validador = true;
        }
        }

  if (this.cambio.impacto) {
          //solo permite numeros y mayores a 0
          if (isNaN(this.cambio.impacto) || this.cambio.impacto <= 0) {
            alert("Impacto incorrecto");
            this.validador = false;
            this.valid = -- this.valid;
          }
          else{
          this.validador = true;
        }
        }

  if (this.cambio.adherencia) {
          //solo permite numeros y mayores a 0
          if (isNaN(this.cambio.adherencia) || this.cambio.adherencia <= 0) {
            alert("Adherencia incorrecta");
            this.validador = false;
            this.valid = -- this.valid;
          }
          else{
          this.validador = true;
        }
        }

  if (this.cambio.humedad) {
          //solo permite numeros y mayores a 0
          if (isNaN(this.cambio.humedad) || this.cambio.humedad <= 0) {
            alert("Humedad incorrecta");
            this.validador = false;
            this.valid = -- this.valid;
          }
          else{
          this.validador = true;
        }
        }

  if (this.cambio.flexibilidad) {
          //solo permite numeros y mayores a 0
          if (isNaN(this.cambio.flexibilidad) || this.cambio.flexibilidad <= 0) {
            alert("Flexibilidad incorrecta");
            this.validador = false;
            this.valid = -- this.valid;
          }
          else{
          this.validador = true;
        }
        }

   if (this.cambio.peso) {
          //solo permite numeros y mayores a 0
          if (isNaN(this.cambio.peso) || this.cambio.peso <= 0) {
            alert("Peso bote incorrecto");
            this.validador = false;
            this.valid = -- this.valid;
          }
          else{
          this.validador = true;
        }
        }

  if (this.cambio.compatibilidad) {
          //solo permite numeros y mayores a 0
          if (isNaN(this.cambio.compatibilidad) || this.cambio.compatibilidad <= 0) {
            alert("Compatibilidad incorrecto"+this.valid);
            this.validador = false;
            this.valid = -- this.valid;
          }
          else{
          this.validador = true;
        }
        }                  


   

  if(this.validador && this.valid==17){

    if(this.cambio.secadot)
    this.cambio.secadot = this.cambio.secadot +" "+ this.secadotf;

    if(this.cambio.secadod)
    this.cambio.secadod = this.cambio.secadod + " "+ this.secadotfrecd;

     this._FormulaServicio.actualiza1Formula(this.formula._id, this.cambio).subscribe(
         response => {
           if(!response.formula){
             alert("Error en el servidor");
           }else{
             this.formula = response.formula;
             alert("Ajuste Agregado");
             this._router.navigate(['/formula', this.formula._id]);
           }
         },
         error =>{
            console.log(<any>error); 
            alert("Error en el servidor");
            this._router.navigate(['/']);
         }
       )
  }
  else{
    alert("Debes ingresar datos del analisis");
    this.valid = 17;
  }
  }//cierra metodo mandaCambio

}//cierra clase

