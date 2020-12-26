import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { generarFlujoInicial } from '../../enums/flujo.enums';
import { CajaflujoService } from '../../services/cajaflujo.service';

@Component({
  selector: 'app-nuevo-periodo',
  templateUrl: './nuevo-periodo.component.html',
  styleUrls: ['./nuevo-periodo.component.scss']
})
export class NuevoPeriodoComponent implements OnInit {
  anos : [number] = [0];
  fragmentaciones : string[] = [];

  form:FormGroup = new FormGroup({}) ;
  constructor(private route:Router, private formBuilder : FormBuilder, private cajaflujoService:CajaflujoService) { }

  ngOnInit(): void {

    this.anos = this.generarAños();
    this.fragmentaciones = this.generarFragmentaciones();

    this.form = this.formBuilder.group({
      ano: ['',Validators.required],
      fragmentacion : ['',Validators.required]
    })




  }

  generarAños() : [number]{
    let esteAno = new Date().getUTCFullYear();
    let anos : [number] =  [esteAno];
    // [1999] -> push(2000) - [1999,2000] -> push(2001) -> [1999,2000,2001]
    for(let i=esteAno-1 ; i>=2000 ; i-- ){
      anos.push(i);
    }
    return anos;
  }

  generarFragmentaciones() : string [] {
    let fragmentacion : string [] = ["Mensual","Bimestral","Semestral"]
    return fragmentacion;
  }

  cambiarRuta() : void{
    let year = this.form.get('ano')?.value
    let tipoFragmentacion = this.form.get('fragmentacion')?.value
    this.route.navigate([`cajaflujo/${year}/${tipoFragmentacion}`])
  }
  regresar() : void{
    this.route.navigate(['/'])
  }

  onSubmit() : void{
    console.log(this.form.value)

    this.route.navigate(['cajaflujo/mis-periodos'])


  }
}
