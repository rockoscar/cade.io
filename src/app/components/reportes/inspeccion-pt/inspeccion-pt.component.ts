import { Component, OnInit } from '@angular/core';
import { FormulaServicio } from '../../../servicios/formula-servicios';
import { Formula } from '../../../models/formula/formula';
import { Cambio } from '../../../models/cambio/cambio';
import { UserService } from '../../../servicios/usuario-servicios';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-inspeccion-pt',
  templateUrl: './inspeccion-pt.component.html',
  providers: [FormulaServicio, UserService],
  styleUrls: ['./inspeccion-pt.component.css']
})
export class InspeccionPtComponent implements OnInit {

  public formulas: Formula[];
  public aprobado: boolean;
  public cambios: Cambio;
  public titulo;
  public titulo2;
  public ncambios;
  public buscaform;
  public titulo3;
  public codRan;
  public codRanFin;
  public Blote;
  public estatus;
  public Belaborado;
  public fecha;
  public fechatermino;
  public oculta;
  public identity;
  public pasta: boolean;

  constructor(
    private _FormulaServicio: FormulaServicio,
    private _UserService: UserService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.cambios = [];
    this.titulo = "Filtros";
    this.titulo2 = "Formulas";
    this.titulo3 = "Rechazos";
    this.oculta = false;

  }

  ngOnInit() {

    this.identity = this._UserService.getIdentity();
    
      if(this.identity){
         //console.log(this.identity);
        if(this.identity.role != 1 && this.identity.role != 4 && this.identity.role != 3){
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

  listado() {
    this._FormulaServicio.formulas().subscribe(
      //res del api
      response => {
        //la respuesta del api manda conforme el nombre que se haya usado en el api
        //en este caso se llamo usuario
        //valida que exista el objeto y una propiedad del objeto en la res
        if (!response.formulas) {
        } else {
          this.formulas = response.formulas;
          //console.log(this.formulas);
          for (let i = 0; i < this.formulas.length; i++) {



            this.aprobado = false;
            this.pasta = false;

            if (this.formulas[i].cambio != null) {
              this.cambios.push(this.formulas[i].cambio);
              this.formulas[i].c1 = this.formulas[i].cambio.comentario;
            }

            if (this.formulas[i].cambio1 != null) {
              this.cambios.push(this.formulas[i].cambio1);
              this.formulas[i].c2 = this.formulas[i].cambio1.comentario;
            }

            if (this.formulas[i].cambio2 != null) {
              this.cambios.push(this.formulas[i].cambio2);
              this.formulas[i].c3 = this.formulas[i].cambio2.comentario;
            }

            if (this.formulas[i].cambio3 != null) {
              this.cambios.push(this.formulas[i].cambio3);
              this.formulas[i].c4 = this.formulas[i].cambio3.comentario;
            }

            if (this.formulas[i].cambio4 != null) {
              this.cambios.push(this.formulas[i].cambio4);
              this.formulas[i].c5 = this.formulas[i].cambio4.comentario;
            }

            if (this.formulas[i].cambio5 != null) {
              this.cambios.push(this.formulas[i].cambio5);
              this.formulas[i].c6 = this.formulas[i].cambio5.comentario;
            }

            if (this.formulas[i].cambio6 != null) {
              this.cambios.push(this.formulas[i].cambio6);
              this.formulas[i].c7 = this.formulas[i].cambio6.comentario;
            }

            if (this.formulas[i].cambio7 != null) {
              this.cambios.push(this.formulas[i].cambio7);
              this.formulas[i].c8 = this.formulas[i].cambio7.comentario;
            }

            if (this.formulas[i].cambio8 != null) {
              this.cambios.push(this.formulas[i].cambio8);
              this.formulas[i].c9 = this.formulas[i].cambio8.comentario;
            }

            if (this.formulas[i].cambio9 != null) {
              this.cambios.push(this.formulas[i].cambio9);
              this.formulas[i].c10 = this.formulas[i].cambio9.comentario;
            }


            this.formulas[i].cambio = this.cambios;


            this.formulas[i].ncambios = this.cambios.length;
            //let ultimo;
            for (let c = 0; c < this.cambios.length; c++) {
              if (this.cambios[c].status == "Aprobado") {
                this.aprobado = true;
                this.formulas[i].fechaLIb = this.cambios[c].fecha;
                this.formulas[i].horaLIb = this.cambios[c].hora;
              }
              //VALIDAMOS PASTA
              if (this.cambios[c].status == "Pasta") {
                this.pasta = true;
                
              }
            }

            //AQUI SE MODIFICO PARA PASTAS
            if(this.pasta && this.cambios.length == 1){
              
                this.formulas[i].status = "Pasta";
             
              
              //this.formulas[i].aprobada = this.formulas[i].cambio[ultimo].fecha ;
              this.formulas[i].rechazos = 0;
              
            }else{

              if (this.aprobado) {
                this.formulas[i].status = "Aprobada";
                //this.formulas[i].aprobada = this.formulas[i].cambio[ultimo].fecha ;
                if(this.pasta){
                  this.formulas[i].rechazos = this.cambios.length - 2;
                }else{
                  this.formulas[i].rechazos = this.cambios.length - 1;
                }
                
                //this.suma(this.formulas[i].rechazos);
                // console.log(this.suma(this.formulas[i].rechazos));
              } else {
                this.formulas[i].status = "Pendiente";
                this.formulas[i].rechazos = this.cambios.length;
                //this.suma(this.formulas[i].rechazos);
                //console.log(this.suma);
              }

            }
            // console.log(this.cambios);
            this.cambios = [];
          }//hasta aqui separa los cambios por cada formula    
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  resetFiltros() {
    this.buscaform = "";
    this.Blote = "";
    this.estatus = "";
    this.Belaborado = "";
    this.fecha = "";
    this.codRan = "";
    this.codRanFin = "";
    this.fechatermino = "";
  }

  Oculta(){
    if(this.oculta== false){
      this.oculta = true;
    }else{
      this.oculta = false;
    }
    
  }

}