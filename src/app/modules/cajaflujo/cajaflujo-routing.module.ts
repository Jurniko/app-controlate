import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CajaflujoComponent } from './cajaflujo.component';
import { CrearFlujoComponent } from './components/crear-flujo/crear-flujo.component';
import { NuevoPeriodoComponent } from './components/nuevo-periodo/nuevo-periodo.component';
import { PeriodosComponent } from './components/periodos/periodos.component';

const routes: Routes = [
  { path: '', component: CajaflujoComponent },
  { path: 'mis-periodos' , component: PeriodosComponent},
  { path: 'nuevo-periodo' , component: NuevoPeriodoComponent},
  { path: 'crear-flujo/:id', component: CrearFlujoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CajaflujoRoutingModule { }
