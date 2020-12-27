import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Periodo } from '../../interfaces/periodo';
import { CajaflujoService } from '../../services/cajaflujo.service';


@Component({
  selector: 'app-periodos',
  templateUrl: './periodos.component.html',
  styleUrls: ['./periodos.component.scss']
})
export class PeriodosComponent implements OnInit {

  constructor(private route:Router, private cajaflujoService:CajaflujoService) {}

  periodos: Periodo[] =  [];

  ngOnInit(): void {
    this.getPeriodos$();
  }

  cambiarRuta() : void {
    this.route.navigate(['cajaflujo/nuevo-periodo']);
  }

  getPeriodos$(){
    this.cajaflujoService.getPeriodos().subscribe(
      data=>{this.periodos = data})
  }

  crearFlujo( id: string  | undefined){
    console.log(id)
    this.route.navigate(['cajaflujo/crear-flujo/'+id])
  }

}
