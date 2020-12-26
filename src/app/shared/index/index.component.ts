import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  integrantes = [
    {
      apellido: "Prudencio Lliuyacc",
      nombre : "Jurgen Nikolai",
      urlImagen : "https://raw.githubusercontent.com/Jurniko/Gato-test/81cbf8b75d9edd291f0d56d59daad47b028f5d1a/Gato_triste.svg"
    },
    {
      apellido: "Fernandez Rodriguez",
      nombre: "Georghina Marjorie",
      urlImagen : "https://raw.githubusercontent.com/Jurniko/Gato-test/81cbf8b75d9edd291f0d56d59daad47b028f5d1a/Gato_triste.svg"
    },
    {
      apellido: "Veliz Gamarra",
      nombre: "Kevin Alberto",
      urlImagen : "https://raw.githubusercontent.com/Jurniko/Gato-test/81cbf8b75d9edd291f0d56d59daad47b028f5d1a/Gato_triste.svg"
    },
    {
      apellido: "Echevarria Alegre",
      nombre: "Keyssi Najhely", // ERROR
      urlImagen : "https://raw.githubusercontent.com/Jurniko/Gato-test/81cbf8b75d9edd291f0d56d59daad47b028f5d1a/Gato_triste.svg"
    },
  ]
  constructor( private route:Router) { }

  ngOnInit(): void {
  }

  cambiarRuta(){
    this.route.navigate(['cajaflujo/'])
  }
}
