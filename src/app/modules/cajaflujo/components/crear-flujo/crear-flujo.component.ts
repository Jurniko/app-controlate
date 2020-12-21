import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-crear-flujo',
  templateUrl: './crear-flujo.component.html',
  styleUrls: ['./crear-flujo.component.scss']
})
export class CrearFlujoComponent implements OnInit {
  idPeriodo ?: number | string
  arrayForIDS: any[] = [];

  fragmentacion  = {
    nombre : "Semestral",
    seccion:[
      {
        meses:"Enero,Febrero,Marzo,Abril,Mayo,Junio"
      },
      {
        meses:"Julio,Agosto,Septiembre,Octubre,Noviembre,Diciembre"
      },
    ],
  }

  filas = [
    {
      titulo : "Ingresos",
      subtitulos: ["Aportes","Ventas en Efectivo","Otros"]
    },
    {
      titulo : "Egresos",
      subtitulos: ["Compra de Mercancía","Salarios","Consumo de Energía", "Impuestos","Servicios Públicos","Alquiler","Publicidad","Depreciación total","Otros"]
    },
    {
      titulo : "Financiamiento",
      subtitulos: ["Préstamos recibidos","Pago de Préstamos","Amortización"]
    }
  ]


   flujo = {
    periodo_id: 'XVRetrcvzxCVZXCvxczv123',

    seccion: [
      {

        ingresos:{
            aportes: 100,
            ventas:200,
            otros:15000
          },

        egresos:{
            compraMercancia: 2000,
            salarios:2600,
            consumoEnergia:150,
            impuestos:123,
            servicosPublicos:150,
            alquiler:120,
            publicidad:500,
            depreciacion:1500,
            otros:600
        },

        financiamiento : {
          prestamos : 500,
          pago : 600,
          Amortizacion :200
        }
        //...
      },
      {

        ingresos:{
            aportes: 500,
            ventas:400,
            otros:13000
          },

        egresos:{
            compraMercancia: 8000,
            salarios:2900,
            consumoEnergia:0,
            impuestos:0,
            servicosPublicos:0,
            alquiler:0,
            publicidad:500,
            depreciacion:1500,
            otros:600
        },

        financiamiento : {
          prestamos : 500,
          pago : 600,
          Amortizacion :200
        }
        //...
      }
    ]
  }

  constructor(private rutaActiva:ActivatedRoute ) { }

  ngOnInit(): void {
    this.rutaActiva.params.subscribe((params:Params)=>{
      idPeriodo : params.id
    })
  }

  agregarValores(seccionID : number){
    let seleccionarSeccion  ={};
    let valoresInputsSeccion  = [];
    //console.log(this.arrayForIDS , seccionID)
    valoresInputsSeccion = this.arrayForIDS.filter((data)=>{
      if(data[0] == seccionID){ //[0] hacer referencia a la  seccion en la que se encuentra
        return true;
      }
    }).map(res=>{
      res.splice(0,1)
      return res;
    }) // Eliminamos el pimer indice ( Seccion ) sabemos en que seccion está

    console.log("inputs",valoresInputsSeccion)

    seleccionarSeccion = this.flujo.seccion[seccionID] // Ingresamos a la sección en la que se pulso AGREGAR
    //console.log(seleccionarSeccion)
    //console.log(Object.keys(seleccionarSeccion)) // se hace un array las propiedades de los flujos(Ingresos, Egresos, financiamiento) - nos interesa su indice
    // ASIGNANDO VALORES EN FUNCIÓN AL TITULO O PRIEDAD EN AL QUE SE ENCUENTRA.

    let nombreTitulo = '';
    let nombrePropiedad = '';
    for(let i = 0 ; i <  valoresInputsSeccion.length ; i++){
      for(let j = 0 ; j < valoresInputsSeccion[i].length ; j++){
        if(j==0){ // fila o titulo
          Object.keys(seleccionarSeccion).map((valor:string,index:number)=>{ // Sacamos las propiedades, y entraremos en la primera
            //console.log(seleccionarSeccion[valor] )
            if( index == valoresInputsSeccion[i][j] ){ // Verificamos que el indice del titulo del flujo(object) sea igual al inidice ingresado por filaID
              nombreTitulo = valor;
              //console.log(seleccionarSeccion[valor], "aqui" )
            }
          })
        }else if( j==1){ // propiedad
          Object.keys(seleccionarSeccion[nombreTitulo]).map((valor:string,index:number)=>{
            if( index == valoresInputsSeccion[i][j]){ // Verificamos que el indice de la propiedad del flujo(object) sea igual al inidice ingresado por subitituloID
              nombrePropiedad = valor
            }
          })
        }else if( j==2 ){ // valor
          seleccionarSeccion[nombreTitulo][nombrePropiedad] = valoresInputsSeccion[i][j]; // le Actualizamos el valor
         // console.log(seleccionarSeccion[nombreTitulo][nombrePropiedad])
        }
      }
    }
    console.log(this.flujo)
  }

  valorInput(seccionID : any, filaID : any ,subtituloID : any, valor:any){
    this.arrayForIDS.push([seccionID,filaID,subtituloID,valor])
    //console.log(this.arrayForIDS )
  }

}
