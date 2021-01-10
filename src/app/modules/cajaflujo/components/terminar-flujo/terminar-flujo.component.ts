import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import html2canvas from 'html2canvas'


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

  capturarPantalla(){
    let secccion = document.querySelector("#imagenPDF");
    html2canvas(secccion as any).then( (canvas : any) =>{
      var link = document.createElement('a');
      link.href = canvas.toDataURL();
      link.download = "Capture.jpg";
      //document.body.appendChild(link);
      link.click()
    })

  }
}
