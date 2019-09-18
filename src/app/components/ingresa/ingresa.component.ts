import { Component, OnInit, Input } from '@angular/core';
import { Cambio } from '../../models/cambio/cambio';


@Component({
  selector: 'ingresa',
  templateUrl: './ingresa.component.html',
  styleUrls: ['./ingresa.component.css']
})
export class IngresaComponent implements OnInit {

  public cambio: Cambio;
  @Input() recibecambio: boolean;
  @Input() formGral;

  constructor() { 
    this.cambio = new Cambio("","");
  }

  ngOnInit() {
    //console.log("hola");
  }

  guardar(){


    //this.formGral.cambio1 = this.cambio1;
    //localStorage.setItem('formGral', JSON.stringify(this.formGral));
    //console.log(this.formGral);
    //this._router.navigate(['/']);
    ////console.log(this.recibecambio);
    //console.log(this.formGral);
    //console.log(this.cambio);
    if(!this.formGral.cambio1){
      this.formGral.cambio1 = this.cambio;
      localStorage.setItem('formGral', JSON.stringify(this.formGral));
      console.log(this.formGral);
    }
  }
  
}