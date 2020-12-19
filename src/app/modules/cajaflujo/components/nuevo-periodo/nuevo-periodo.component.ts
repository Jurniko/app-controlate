import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-periodo',
  templateUrl: './nuevo-periodo.component.html',
  styleUrls: ['./nuevo-periodo.component.scss']
})
export class NuevoPeriodoComponent implements OnInit {
  anos : [number] = [0];
  fragmentaciones : string[] = [];

  form:FormGroup = new FormGroup({}) ;
  constructor(private route:Router, private formBuilder : FormBuilder) { }

  ngOnInit(): void {

    this.anos = this.generarAños();
    this.fragmentaciones = this.generarFragmentaciones();

    this.form = this.formBuilder.group({
      ano: ['',Validators.required],
      fragmentacion : ['',Validators.required]
    })

    this.form.get('ano')?.valueChanges.subscribe(dara =>{console.log(dara)})


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
    this.route.navigate(['cajaflujo/mis-periodos'])
  }

  onSubmit() : void{
    console.log(this.form.value)
  }
}
