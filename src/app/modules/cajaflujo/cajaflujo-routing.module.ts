import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CajaflujoComponent } from './cajaflujo.component';

const routes: Routes = [
  { path: '', component: CajaflujoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CajaflujoRoutingModule { }
