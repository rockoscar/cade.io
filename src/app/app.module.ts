import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';


import { routing, appRoutingProviders } from "./app.routing";
import { HttpModule } from "@angular/http";

import { InicioComponent } from "./components/agrega/agrega.component";
import { EditaComponent } from "./components/edita/edita.component";
import { IngresaComponent } from './components/ingresa/ingresa.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { ContenedorAComponent } from './components/contenedor-a/contenedor-a.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { EditaUsuarioComponent } from './components/edita-usuario/edita-usuario.component';
import { DetalleFormulaComponent } from './components/detalle-formula/detalle-formula.component';


//pipes
import { BuscarPipe } from './components/pipes/buscar.pipes';
import { BuscarSPipe } from './components/pipes/buscar.pipes';
import { promeRPipe } from './components/pipes/buscar.pipes';
import { totalFormulasPipe } from './components/pipes/buscar.pipes';
import { bienPrimeraPorcenPipe } from './components/pipes/buscar.pipes';
import { bienPrimeraPipe } from './components/pipes/buscar.pipes';
import { estatusPipe } from './components/pipes/buscar.pipes';
import { bienSegundaPipe } from './components/pipes/buscar.pipes';
import { bienSegundaPorcenPipe } from './components/pipes/buscar.pipes';
import { codRan } from './components/pipes/buscar.pipes';
import { codRanFin } from './components/pipes/buscar.pipes';
import { sumaRPipe } from './components/pipes/buscar.pipes';
import { sumaAnalisisPipe } from './components/pipes/buscar.pipes';
import { BuscaLotePipe } from './components/pipes/blote.pipes';
import { BuscaElaboradoPipe } from './components/pipes/belaborado.pipes';
import { FechaPipe } from './components/pipes/fecha.pipe';
import { FechaTermPipe } from './components/pipes/fechaterm.pipe';
import { UsuariosNombrePipe } from './components/pipes/buscador-usuarios.pipe';
import { UsuariosNumeroPipe } from './components/pipes/buscador-usuarios.pipe';
import { UsuariosApellidoPipe } from './components/pipes/buscador-usuarios.pipe';
import { UsuariosDepartamentoPipe } from './components/pipes/buscador-usuarios.pipe';


import { BuscadorUsuariosComponent } from './components/buscador-usuarios/buscador-usuarios.component';
import { DetalleUsuarioComponent } from './components/detalle-usuario/detalle-usuario.component';
import { InspeccionPtComponent } from './components/reportes/inspeccion-pt/inspeccion-pt.component';
import { EditaUsuariosComponent } from './components/edita-usuarios/edita-usuarios.component';
import { ImpresionComponent } from './components/reportes/impresion/impresion.component';
import { RechazoEstadisticoComponent } from './components/reportes/rechazo-estadistico/rechazo-estadistico.component';
import { ReportesPipe } from './components/pipes/reportes.pipe';
//import { InspeccionPtComponent } from './components/Reportes/inspeccion-pt/inspeccion-pt.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing ],
  declarations: [ AppComponent, HelloComponent, InicioComponent, EditaComponent, IngresaComponent, BuscadorComponent, ContenedorAComponent, LoginComponent, RegistroComponent, EditaUsuarioComponent, DetalleFormulaComponent, BuscarPipe, BuscaLotePipe, BuscaElaboradoPipe, FechaPipe, FechaTermPipe, BuscadorUsuariosComponent, DetalleUsuarioComponent, bienPrimeraPipe, bienPrimeraPorcenPipe, estatusPipe, bienSegundaPipe, bienSegundaPorcenPipe, 
  UsuariosNombrePipe, UsuariosNumeroPipe, UsuariosApellidoPipe, UsuariosDepartamentoPipe, InspeccionPtComponent, EditaUsuariosComponent, BuscarSPipe, sumaRPipe, promeRPipe,
  codRan, totalFormulasPipe, codRanFin, sumaAnalisisPipe, ImpresionComponent, RechazoEstadisticoComponent, ReportesPipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
