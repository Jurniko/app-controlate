import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'button-m',
  templateUrl: './button-m.component.html'
})
export class ButtonMComponent implements OnInit {

  @Input() nombre : string  = '';
  @Input() tipo : string = 'defecto';
  color : string = ''
  constructor() {}

  ngOnInit(): void {
    this.cambiarColor();
  }


  cambiarColor() : void {

    switch(this.tipo){
      case "defecto":
      this.color = "py-2 px-8 bg-blue-500 hover:bg-blue-400 rounded-full text-white font-semibold shadow-xl mx-2 focus:outline-none"
        break;
      case "cancelar":
      this.color = "py-2 px-8 bg-red-500 hover:bg-red-400 rounded-full text-white font-semibold shadow-xl mx-2 focus:outline-none"
        break;
      case "agregar":
        this.color = "py-2 px-8 bg-green-500 hover:bg-green-400 rounded-full text-white font-semibold shadow-xl mx-2 focus:outline-none"
        break;
      case "registrar":
        this.color = "py-2 px-8 bg-green-600 hover:bg-green-500 rounded-full text-white font-semibold shadow-xl mx-2 focus:outline-none"
        break;
      case "accion":
        this.color = "py-2 px-8 bg-white hover:text-green-200 hover:border-green-200 rounded border-2 border-green-300 text-green-300 font-semibold shadow-lg mx-2 focus:outline-none "
      break;
      case "momento":
        this.color = "py-2 px-16 bg-gradient-to-r from-blue-500 to-green-400 rounded-full text-white text-xl shadow-2xl hover:from-gray-50 hover:to-blue-400  focus:outline-none"
        break;
    }

  }

}
