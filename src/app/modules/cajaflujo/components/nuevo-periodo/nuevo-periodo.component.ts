import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo-periodo',
  templateUrl: './nuevo-periodo.component.html',
  styleUrls: ['./nuevo-periodo.component.scss']
})
export class NuevoPeriodoComponent implements OnInit {
  años : [number] = [0];
  
  constructor() { }

  ngOnInit(): void {
    this.años = this.generarAños();
  }

  generarAños() : [number]{
    let esteAño = new Date().getUTCFullYear();
    let años : [number] =  [1999];
    // [1999] -> push(2000) - [1999,2000] -> push(2001) -> [1999,2000,2001]
    for(let i=2000 ; i<=esteAño ; i++ ){
      años.push(i);
    }
    return años;
  }

}
