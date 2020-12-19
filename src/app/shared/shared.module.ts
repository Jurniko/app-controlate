import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonMComponent } from './button-m/button-m.component';
import { InputMComponent } from './input-m/input-m.component';

import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ButtonMComponent,
    InputMComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ButtonMComponent,
    InputMComponent
  ]
})
export class SharedModule { }
