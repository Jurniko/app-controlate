import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CajaflujoRoutingModule } from './cajaflujo-routing.module';
import { CajaflujoComponent } from './cajaflujo.component';


@NgModule({
  declarations: [CajaflujoComponent],
  imports: [
    CommonModule,
    CajaflujoRoutingModule
  ]
})
export class CajaflujoModule { }
