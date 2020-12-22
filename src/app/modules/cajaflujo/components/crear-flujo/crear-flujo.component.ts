import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { generarFlujoInicial } from '../../enums/flujo.enums';
import { generarFragmentacion, generarPropiedadesFlujo } from '../../enums/init.enums';
import { Flujo, PropiedadesFlujo } from '../../interfaces/flujo';
import { Fragmentacion } from '../../interfaces/fragmentacion';
import { Periodo } from '../../interfaces/periodo';
import { PropiedadFlujo } from '../../interfaces/propiedadFlujo';
import { CajaflujoService } from '../../services/cajaflujo.service';

@Component({
  selector: 'app-crear-flujo',
  templateUrl: './crear-flujo.component.html',
  styleUrls: ['./crear-flujo.component.scss']
})
export class CrearFlujoComponent implements OnInit {
  idPeriodo :  string = '';
  indicesConValores : any [][] = [];
  flujoModoArray ?: any[][][];
  fragmentacion : Fragmentacion [] = generarFragmentacion("Semestral");
  propiedades : PropiedadFlujo[] = generarPropiedadesFlujo();
  flujo : Flujo = generarFlujoInicial("Semestral");

  constructor(private rutaActiva:ActivatedRoute, private cajaFlujoService: CajaflujoService ) { }

  ngOnInit(): void {
    this.rutaActiva.params.subscribe((params:Params)=>{
      this.idPeriodo = params.id
    })
    this.flujoModoArray  =this.pintarFlujo(this.flujo);
  }

  pintarFlujo(flujo:Flujo) : any[][][]{
    let dividido:any;
    let indiceSeccion = 0;
    let indiceFila = 0;
    let indicePropiedad = 0 ;
    let valor = 0;
    console.log(flujo.seccion)
    for( let i = 0 ; i < flujo.seccion.length ; i++){ // el i = hace referencia a que seccion es
      if(!dividido){ dividido = [] }else{ // Creamos la primera forma flujoModoArray[indiceSeccion]
        dividido.push();
      }
     // console.log(dividido)
      indiceSeccion = i;
      /*
      * Forma de nuestro Array para pintar el HTML
      * flujoModoArray[seccionID][filaID][subtituloID] -> devolverá el valor del input
      */
      Object.keys(flujo.seccion[i]).map((nomPropiedad:string, inFila:number) => { // Ingresamos a las propiedades de la FILA
        if(!dividido[indiceSeccion]){ dividido[indiceSeccion] = [] }else{  // Creamos la segunda forma flujoModoArray[iSeccion][iFila]
          dividido[indiceSeccion].push([]);
        }
        //console.log(dividido)
        indiceFila =  inFila ;
        Object.values( flujo.seccion[i][nomPropiedad] ).map((valorPropiedad, inPropiedad)=>{ // Ingresamos a los valores de las PROPEIDADES
          if(!dividido[indiceSeccion][indiceFila]){ dividido[indiceSeccion][indiceFila] = [valorPropiedad] }else{  // Creamos la tercera forma flujoModoArray[iSeccion][iFila][iPropiedad]
            dividido[indiceSeccion][indiceFila].push(valorPropiedad);
          }

          //indicePropiedad = inPropiedad;
        })
      })
    }
    return dividido;
  }






  agregarValores(seccionID : number){
    let myflujoSeccion:any;
    let indicesPertenecientesSeccion : any ;
    indicesPertenecientesSeccion  = this.indicesConValores;
    indicesPertenecientesSeccion  =  indicesPertenecientesSeccion.filter((data : any [])=> data[0] == seccionID) //[0] hacer referencia a la seccion en la que se encuentra
    .map((res : any[] )=>{
    res.splice(0,1)
    return res;
    }) // Eliminamos el primer indice ( Seccion ), ya que sabemos en que seccion está

    myflujoSeccion = this.flujo.seccion[seccionID] // Ingresamos a la sección en la que se pulso AGREGAR
    //console.log(Object.keys(seleccionarSeccion)) // se hace un array las propiedades de los flujos(Ingresos, Egresos, financiamiento) - nos interesa su indice
    // ASIGNANDO VALORES EN FUNCIÓN AL TITULO O PROPIEDAD EN AL QUE SE ENCUENTRA.

    console.log(myflujoSeccion,"myflujo")
    let nombreTitulo = '';
    let nombrePropiedad = '';

    for(let i = 0 ; i <  indicesPertenecientesSeccion.length ; i++){
      for(let j = 0 ; j < indicesPertenecientesSeccion[i].length ; j++){
        if(j==0){ // fila o titulo
          Object.keys(myflujoSeccion).map((nombreFila:string,indiceFila:number)=>{ // Sacamos las propiedades, y entraremos en la primera
            //console.log(seleccionarSeccion[valor] )
            if( indiceFila == indicesPertenecientesSeccion[i][j] ){ // Verificamos que el indice del titulo del flujo(object) sea igual al indice ingresado por filaID
              nombreTitulo = nombreFila;
              //console.log(nombreFila)
            }
          })
        }else if( j==1){ // propiedad
          Object.keys(myflujoSeccion[nombreTitulo]).map((nomPropiedad:string,indicePropiedad:number)=>{
            if( indicePropiedad == indicesPertenecientesSeccion[i][j]){ // Verificamos que el indice de la propiedad del flujo(object) sea igual al inidice ingresado por subitituloID
              //console.log(nombrePropiedad)
              nombrePropiedad = nomPropiedad // -> nombPropiedad, para que no haya problemas
            }
          })
        }else if( j==2 ){ // valor
          //console.log(nombreTitulo,nombrePropiedad, indicesPertenecientesSeccion[i][j])
          myflujoSeccion[nombreTitulo][nombrePropiedad] = indicesPertenecientesSeccion[i][j]; // le Actualizamos el valor
        }
      }
    }

    // ======================  CALCULOS DE TOTAL ==============================================
    console.log(this.flujo)
  }

  valorInput(seccionID : number, filaID : number ,subtituloID : number, valor:number|string){

    if(!this.indicesConValores){ // Cuando no inicializa aún
      this.indicesConValores = [[seccionID,filaID,subtituloID,valor]]
    }
    this.indicesConValores.push([seccionID,filaID,subtituloID,valor])
  }

}
