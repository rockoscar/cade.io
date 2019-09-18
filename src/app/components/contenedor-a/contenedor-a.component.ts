import { Component, OnInit } from '@angular/core';
import { Formula } from '../../models/formula/formula';

@Component({
  selector: 'contenedor-a',
  templateUrl: './contenedor-a.component.html',
  styleUrls: ['./contenedor-a.component.css']
})
export class ContenedorAComponent implements OnInit {
  public formulaBuscada: Formula;
  public e: boolean;
  public camb: boolean;

  constructor() {
    this.formulaBuscada= new Formula("");
    this.e = false;
   }

  ngOnInit() {
  }

  recibeFormula(event){
      this.formulaBuscada=event;    
  }

  encont(event){
    this.e = event;
  }

  recibecambio(event){
    this.camb = event;
  }
}