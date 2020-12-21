import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CajaflujoRoutingModule } from './cajaflujo-routing.module';
import { CajaflujoComponent } from './cajaflujo.component';
import { PeriodosComponent } from './components/periodos/periodos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NuevoPeriodoComponent } from './components/nuevo-periodo/nuevo-periodo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CrearFlujoComponent } from './components/crear-flujo/crear-flujo.component';


@NgModule({
  declarations: [CajaflujoComponent, PeriodosComponent, NuevoPeriodoComponent, CrearFlujoComponent],
  imports: [
    CommonModule,
    CajaflujoRoutingModule,
    SharedModule,
    ReactiveFormsModule

  ],
  exports: []
})
export class CajaflujoModule { }
