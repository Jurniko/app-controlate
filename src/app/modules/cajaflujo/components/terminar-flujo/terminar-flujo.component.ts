import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'modal-terminar-flujo',
  templateUrl: './terminar-flujo.component.html',
  styleUrls: ['./terminar-flujo.component.scss']
})
export class TerminarFlujoComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  nuevoFlujo(){
    this.route.navigate(["cajaflujo"])
  }
}
