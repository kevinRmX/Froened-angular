import { GraficaComponent } from './Usuarios/grafica/grafica.component';
import { TablaComponent } from './usuarios/tabla/tabla.component';
import { NuevoComponent } from './usuarios/nuevo/nuevo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'nuevo', component: NuevoComponent},
  {path: 'tabla', component:TablaComponent},
  {path: 'grafica', component: GraficaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
