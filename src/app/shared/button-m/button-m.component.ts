import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-m',
  templateUrl: './button-m.component.html'
})
export class ButtonMComponent implements OnInit {

  @Input() nombre : string  = 'Georghina';
  @Input() tipo : string = 'defecto';
  color : string = ''
  constructor() {}

  ngOnInit(): void {
    this.cambiarColor();
  }


  cambiarColor() : void {
    
    switch(this.tipo){
      case "defecto":
      this.color = "py-2 px-8 bg-blue-500 hover:bg-blue-400 rounded-full text-white font-semibold shadow-xl"
        break;
      case "cancelar":
      this.color = "py-2 px-8 bg-red-500 hover:bg-red-400 rounded-full text-white font-semibold shadow-xl"
        break;
      case "agregar":
        this.color = "py-2 px-8 bg-green-500 hover:bg-green-400 rounded-full text-white font-semibold shadow-xl"
    }

  }

}
