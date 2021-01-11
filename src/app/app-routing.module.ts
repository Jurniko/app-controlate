import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './shared/index/index.component';

const routes: Routes = [
  { path:'', redirectTo:'cajaflujo', pathMatch: 'full'},
  { path: 'cajaflujo', loadChildren: () => import('./modules/cajaflujo/cajaflujo.module').then(m => m.CajaflujoModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
