import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CajaflujoRoutingModule } from './cajaflujo-routing.module';
import { CajaflujoComponent } from './cajaflujo.component';
import { PeriodosComponent } from './components/periodos/periodos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NuevoPeriodoComponent } from './components/nuevo-periodo/nuevo-periodo.component';


@NgModule({
  declarations: [CajaflujoComponent, PeriodosComponent, NuevoPeriodoComponent],
  imports: [
    CommonModule,
    CajaflujoRoutingModule,
    SharedModule
  ],
  exports: []
})
export class CajaflujoModule { }
