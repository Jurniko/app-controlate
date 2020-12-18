import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-periodos',
  templateUrl: './periodos.component.html',
  styleUrls: ['./periodos.component.scss']
})
export class PeriodosComponent implements OnInit {

  constructor(private route:Router) {}

  ngOnInit(): void {
  }

  cambiarRuta() : void {
    this.route.navigate(['cajaflujo/nuevo-periodo']);
  }

}
