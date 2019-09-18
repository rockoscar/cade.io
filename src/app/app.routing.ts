//modulos requeridos para el routing
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//componentes importados para que los usen las rutas
import { InicioComponent } from "./components/agrega/agrega.component";
import { ContenedorAComponent } from "./components/contenedor-a/contenedor-a.component";
import { LoginComponent } from "./components/login/login.component";
import { RegistroComponent } from "./components/registro/registro.component";
import { EditaUsuarioComponent } from "./components/edita-usuario/edita-usuario.component";
import { DetalleFormulaComponent } from "./components/detalle-formula/detalle-formula.component";
import { EditaComponent } from "./components/edita/edita.component";
import { BuscadorUsuariosComponent } from "./components/buscador-usuarios/buscador-usuarios.component";
import { DetalleUsuarioComponent } from "./components/detalle-usuario/detalle-usuario.component";
import { InspeccionPtComponent } from "./components/reportes/inspeccion-pt/inspeccion-pt.component";
import { RechazoEstadisticoComponent } from "./components/reportes/rechazo-estadistico/rechazo-estadistico.component";
import { EditaUsuariosComponent } from "./components/edita-usuarios/edita-usuarios.component";



//se crea una constante de tipo array donde se guardaran las rutas
const appRoutes: Routes = [
  //se van definiendo cada una de las rutas
  //cuando la ruta esta vacia abre el componente tiendacomponent
  //{path:'', component: InicioComponent},

  { path: "", redirectTo: "login", pathMatch: "full" },

  //cuando la ruta es tienda abre el componente
  { path: "agrega", component: InicioComponent },
  { path: "edita", component: ContenedorAComponent },
  { path: "login", component: LoginComponent },
  { path: "registro", component: RegistroComponent },
  { path: "mis-datos", component: EditaUsuarioComponent },
  { path: "formula/:id", component: DetalleFormulaComponent },
  { path: "agrega-cambio/:id", component: EditaComponent },
  { path: "buscador-usuarios", component: BuscadorUsuariosComponent },
  { path: "detalle-usuario/:id", component: DetalleUsuarioComponent },
  { path: "inspeccion-pt", component: InspeccionPtComponent },
  { path: "rechazo-estadistico", component: RechazoEstadisticoComponent },
  { path: "edita-usuarios/:id", component: EditaUsuariosComponent },
  //tener cuidado con el orden de las rutas, debe ir hasta abajo el comodin **

  { path: "**", component: LoginComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
