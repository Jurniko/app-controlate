import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonMComponent } from './button-m/button-m.component';
import { InputMComponent } from './input-m/input-m.component';



@NgModule({
  declarations: [
    ButtonMComponent,
    InputMComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonMComponent,
    InputMComponent
  ]
})
export class SharedModule { }
