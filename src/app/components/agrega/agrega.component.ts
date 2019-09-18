import { Component, OnInit } from '@angular/core';
import { Formula } from '../../models/formula/formula';
import { Cambio } from '../../models/cambio/cambio';
import { UserService } from '../../servicios/usuario-servicios';
import { RegistraFormula } from '../../models/formula/registra';
import { FormulaServicio } from '../../servicios/formula-servicios';
import { Router, ActivatedRoute, Params } from '@angular/router';



@Component({
  selector: "inicio",
  templateUrl: "./agrega.component.html",
  providers: [FormulaServicio, UserService],
  styleUrls: ['./agrega.component.css']
})
export class InicioComponent implements OnInit {
  title = "Agrega una Fórmula";

  public registraFormula: RegistraFormula;

  public num;
  public formGral: Formula;
  public camb: Cambio;
  public formu: Formula;
  public secadotac;
  public secadotf;
  public secadotfrecd;
  public validador: boolean;
  public identity;
  public valid: number;

  constructor(
    private _FormulaServicio: FormulaServicio,
    private _UserService: UserService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {

    this.registraFormula = new RegistraFormula();

    this.camb = new Cambio();
    this.num = "";
    this.formu = new Formula();
    this.valid = 18;
  }

  ngOnInit() {

     this.identity = this._UserService.getIdentity();
    
      if(this.identity){
         //console.log(this.identity);
        if(this.identity.role == 1){
          alert('No cuentas con los privilegios');
          this._router.navigate(['/edita']);
        }

      }else{
        alert('Debes iniciar sesión primero, pillo');
        this._router.navigate(['/login']);
      }

    
  }

  onSubmit() {

    this.identity = this._UserService.getIdentity();
    //console.log(this.identity);
    //validadores
    var x = +this.registraFormula.codigo;
    if (x <= 0) {
      alert("Codigo incorrecto");
    }
    
  if (this.registraFormula.viscosidad) {
        //solo permite numeros y mayores a 0
        if (this.registraFormula.viscosidad <= 0) {
          alert("Viscosidad incorrecta");
          this.validador = false;
          this.valid = -- this.valid;
        }
        else{
          this.validador = true;
        }
      }
    if (this.registraFormula.densidad) {
          //solo permite numeros y mayores a 0
          if (isNaN(this.registraFormula.densidad) || this.registraFormula.densidad <= 0) {
            alert("Densidad incorrecta");
            this.validador = false;
            this.valid = -- this.valid;
          }
          else{
          this.validador = true;
        }
        }

        if (this.registraFormula.solidos) {
          //solo permite numeros y mayores a 0
          if (isNaN(this.registraFormula.solidos) || this.registraFormula.solidos <= 0) {
            alert("Solidos totales incorrecta");
            this.validador = false;
            this.valid = -- this.valid;
          }
          else{
          this.validador = true;
        }
        }

         if (this.registraFormula.ph) {
          //solo permite numeros y mayores a 0
          if (isNaN(this.registraFormula.ph) || this.registraFormula.ph <= 0) {
            alert("PH incorrecta");
            this.validador = false;
            this.valid = -- this.valid;
          }
          else{
          this.validador = true;
        }
        }

        if (this.registraFormula.finura) {
          //solo permite numeros y mayores a 0
          if (this.registraFormula.finura <= 0) {
            alert("Finura incorrecta");
            this.validador = false;
            this.valid = -- this.valid;
          }
          else{
          this.validador = true;
        }
        }

        if (this.registraFormula.poder) {
          //solo permite numeros y mayores a 0
          if (this.registraFormula.poder <= 0) {
            alert("Poder cubriente incorrecto");
            this.validador = false;
            this.valid = -- this.valid;
          }
          else{
          this.validador = true;
        }
        }

        if (this.registraFormula.dureza) {
          //solo permite numeros y mayores a 0
          if (isNaN(this.registraFormula.dureza) || this.registraFormula.dureza <= 0) {
            alert("Dureza incorrecta");
            this.validador = false;
            this.valid = -- this.valid;
          }
          else{
          this.validador = true;
        }
        }

        if (this.registraFormula.brillo) {
          //solo permite numeros y mayores a 0
          if (isNaN(this.registraFormula.brillo) || this.registraFormula.brillo <= 0) {
            alert("Brillo incorrecto");
            this.validador = false;
            this.valid = -- this.valid;
          }
          else{
          this.validador = true;
        }
        }

         if (this.registraFormula.secadot || this.secadotf) {
          //solo permite numeros y mayores a 0
          if (isNaN(this.registraFormula.secadot) || this.registraFormula.secadot <= 0 || !this.secadotf) {
            alert("Secado tacto incorrecto");
            this.validador = false;
            this.valid = -- this.valid;
          }
          else{
          this.validador = true;
        }
        }

         if (this.registraFormula.secadod || this.secadotfrecd) {
          //solo permite numeros y mayores a 0
          if (isNaN(this.registraFormula.secadod) || this.registraFormula.secadod <= 0 || !this.secadotfrecd) {
            alert("Secado duro incorrecto");
            this.validador = false;
            this.valid = -- this.valid;
          }
          else{
          this.validador = true;
        }
        }

        if (this.registraFormula.impacto) {
          //solo permite numeros y mayores a 0
          if (isNaN(this.registraFormula.impacto) || this.registraFormula.impacto <= 0) {
            alert("Impacto incorrecto");
            this.validador = false;
            this.valid = -- this.valid;
          }
          else{
          this.validador = true;
        }
        }

         if (this.registraFormula.adherencia) {
          //solo permite numeros y mayores a 0
          if (isNaN(this.registraFormula.adherencia) || this.registraFormula.adherencia <= 0) {
            alert("Adherencia incorrecta");
            this.validador = false;
            this.valid = -- this.valid;
          }
          else{
          this.validador = true;
        }
        }

        if (this.registraFormula.humedad) {
          //solo permite numeros y mayores a 0
          if (isNaN(this.registraFormula.humedad) || this.registraFormula.humedad <= 0) {
            alert("Humedad incorrecta");
            this.validador = false;
            this.valid = -- this.valid;
          }
          else{
          this.validador = true;
        }
        }

        if (this.registraFormula.flexibilidad) {
          //solo permite numeros y mayores a 0
          if (isNaN(this.registraFormula.flexibilidad) || this.registraFormula.flexibilidad <= 0) {
            alert("Flexibilidad incorrecta");
            this.validador = false;
            this.valid = -- this.valid;
          }
          else{
          this.validador = true;
        }
        }

        if (this.registraFormula.peso) {
          //solo permite numeros y mayores a 0
          if (isNaN(this.registraFormula.peso) || this.registraFormula.peso <= 0) {
            alert("Peso bote incorrecto");
            this.validador = false;
            this.valid = -- this.valid;
          }
          else{
          this.validador = true;
        }
        }

         if (this.registraFormula.compatibilidad) {
          //solo permite numeros y mayores a 0
          if (isNaN(this.registraFormula.compatibilidad) || this.registraFormula.compatibilidad <= 0) {
            alert("Compatibilidad incorrecto");
            this.validador = false;
            this.valid = -- this.valid;
          }
          else{
          this.validador = true;
        }
        }

        if (!this.registraFormula.operador) {
          alert("Operador obligatorio");
          this.validador = false;
          this.valid = -- this.valid;
        }
        


    //comprueba para guardar formula
    if(this.validador && this.valid==18){
       //une las variables del saco duro y tacto
          if (this.registraFormula.secadot)
            this.registraFormula.secadot = this.registraFormula.secadot + " " + this.secadotf;

          if (this.registraFormula.secadod)
            this.registraFormula.secadod = this.registraFormula.secadod + " " + this.secadotfrecd;

          //usamos el servicio que hara la req al api, mandando el objeto llenado en el form
          this._FormulaServicio.agregaFormula(this.registraFormula).subscribe(
            //res del api
            response => {
              //la respuesta del api manda conforme el nombre que se haya usado en el api
              //en este caso se llamo usuario
              //valida que exista el objeto y una propiedad del objeto en la res
              if (response.formula && response.formula._id) {
                //this.user= response.user;
                //this.formu = response.formula;
                //console.log(response)
                alert("Formula guardada");
                this._router.navigate(['/edita']);
                //cambia el status
                //this.status='Exitoso';
                //resetea el objeto usuario
                //this.user= new User ('', '', '', '','','ROLE_USER', '', '');
                //limpia el registro
                //registerForm.reset();

              } else {
                //this.status='Error';
              }
            },
            error => {
              //console.log(<any>error);
            }
          );
    }
    else{
      alert("Debes ingresar datos del analisis");
      this.valid = 18;
    }
      
  }//acaba el metodo
}//acaba la clase
