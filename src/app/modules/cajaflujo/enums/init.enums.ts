import { clonarObjeto } from "src/app/utils/clonar-objeto";
import { FlujoResultado, SeccionFlujoResultado } from "../interfaces/cajaflujo";
import { PropiedadesFlujo } from "../interfaces/flujo";
import { Fragmentacion} from "../interfaces/fragmentacion";
import { PropiedadFlujo } from "../interfaces/propiedadFlujo";

export function generarFragmentacion(fragmentacion:string="Mensual") : Fragmentacion []{
/* CUANDO SE TRABAJO CON FIRESTORE
  let fragmentos:Fragmentacion[]  =
  [
    {
      nombre : "Semestral",
      seccion:[
          {
            meses:"Enero,Febrero,Marzo,Abril,Mayo,Junio"
          },
          {
            meses:"Julio,Agosto,Septiembre,Octubre,Noviembre,Diciembre"
          },
      ]
    },
    {
      nombre : "Mensual",
      seccion:[
          {
            meses:"Enero,"
          },
          {
            meses:"Febrero"
          },
          {
            meses:"Marzo"
          },
          {
            meses:"Abril"
          },
          {
            meses:"Mayo"
          },
          {
            meses:"Junio"
          },
          {
            meses:"Julio"
          },
          {
            meses:"Agosto"
          },
          {
            meses:"Septiembre"
          },
          {
            meses:"Octubre"
          },
          {
            meses:"Noviembre"
          },
          {
            meses:"Diciembre"
          }
      ]
    },
    {
      nombre : "Bimestral",
      seccion:[
          {
            meses:"Enero,Febrero"
          },
          {
            meses:"Marzo,Abril"
          },
          {
            meses:"Mayo,Junio"
          },
          {
            meses:"Julio,Agosto"
          },
          {
            meses:"Septiembre,Octubre"
          },
          {
            meses:"Noviembre,Diciembre"
          }
      ]
    },

]
*/
  let fragmento:Fragmentacion[] = [];
  fragmentacion = fragmentacion.toLowerCase();
  switch(fragmentacion){
    case 'mensual':
      fragmento= [ {
        nombre : "Mensual",
        seccion:[
            {
              meses:"Enero,"
            },
            {
              meses:"Febrero"
            },
            {
              meses:"Marzo"
            },
            {
              meses:"Abril"
            },
            {
              meses:"Mayo"
            },
            {
              meses:"Junio"
            },
            {
              meses:"Julio"
            },
            {
              meses:"Agosto"
            },
            {
              meses:"Septiembre"
            },
            {
              meses:"Octubre"
            },
            {
              meses:"Noviembre"
            },
            {
              meses:"Diciembre"
            }
        ]
      }]
      break;
    case 'bimestral':
      fragmento= [
        {
        nombre : "Bimestral",
        seccion:[
            {
              meses:"Enero,Febrero"
            },
            {
              meses:"Marzo,Abril"
            },
            {
              meses:"Mayo,Junio"
            },
            {
              meses:"Julio,Agosto"
            },
            {
              meses:"Septiembre,Octubre"
            },
            {
              meses:"Noviembre,Diciembre"
            }
        ]
      }]
      break;
    case 'semestral':
      fragmento = [
        {
          nombre : "Semestral",
          seccion:[
              {
                meses:"Enero,Febrero,Marzo,Abril,Mayo,Junio"
              },
              {
                meses:"Julio,Agosto,Septiembre,Octubre,Noviembre,Diciembre"
              },
          ]
        }
      ]
      break;
  }

  return fragmento as Fragmentacion[];
}




export function generarPropiedadesFlujo() : PropiedadFlujo[]{
  let propiedades:PropiedadFlujo [] = [
  {
      titulo : "Ingresos",
      subtitulos: [
      "Aportes",
      "Ventas en Efectivo",
      "Otros"]  // OBservar
  },
  {
    titulo : "Egresos",
    subtitulos: [
    "Compra de Mercancía",
    "Salarios",
    "Consumo de Energía",
    "Impuestos",
    "Servicios Públicos",
    "Alquiler",
    "Publicidad",
    "Depreciación total",
    "Otros" // OBservar
    ]
  },
  {
    titulo : "Financiamiento",
    subtitulos: [
    "Préstamos recibidos",
    "Pago de Préstamos",
    "Amortización",
  ]
  },
  ]

  return propiedades;
}


export function generarTotalFlujo(tipoFragmentacion :string ="Mensual"){
  /*
  * seccion : [ {
    totalIngreso : 0,
    totalEgreso : 0,
    totalFinanciamiento : 0,
    flujoCajaEconomico: 0,
    saldoInicial :0,
    saldoFinal   : 0
  }]
  *
  */
  let formatoInicial;
  tipoFragmentacion = tipoFragmentacion.toLowerCase();
  switch(tipoFragmentacion){
    case "mensual":
      formatoInicial = {
        seccion: [
          [0,0,0,0,0,0,0],//Enero
          [0,0,0,0,0,0,0],//Febrero
          [0,0,0,0,0,0,0],//Marzo
          [0,0,0,0,0,0,0],//Abril
          [0,0,0,0,0,0,0],//Mayo
          [0,0,0,0,0,0,0],//Junio
          [0,0,0,0,0,0,0],//Julio
          [0,0,0,0,0,0,0],//Agosto
          [0,0,0,0,0,0,0],//Septiembre
          [0,0,0,0,0,0,0],//Octubre
          [0,0,0,0,0,0,0],//Noviembre
          [0,0,0,0,0,0,0],//Diciembre

        ]
      }
      break;
    case "bimestral":
      formatoInicial = {
        seccion: [
          [0,0,0,0,0,0,0],// E - F
          [0,0,0,0,0,0,0],// M - A
          [0,0,0,0,0,0,0],// M - J
          [0,0,0,0,0,0,0],// L - A
          [0,0,0,0,0,0,0],// S - O
          [0,0,0,0,0,0,0] // N - D
        ]
      }
      break;
    case "semestral":
      formatoInicial = {
        seccion: [
          [0,0,0,0,0,0,0], // E -F -M -A -M - J
          [0,0,0,0,0,0,0] // J -A -S -O -N -D
        ]
      }
      break;
  }
  return formatoInicial;
}



export function generarFlujoResultado( tipoFragmentacion : string = "Mensual"){
  let formatoInicial:FlujoResultado = {seccion:[]};
  let seccionCajaFlujo : SeccionFlujoResultado = {
    flujoCajaEconomico : 0,
    flujoCajaFinanciero: 0,
    saldoInicial :0,
    saldoFinal   : 0
  }

  tipoFragmentacion = tipoFragmentacion.toLowerCase();
  switch(tipoFragmentacion){
    case "mensual":
      formatoInicial = {
        seccion: [
          clonarObjeto(seccionCajaFlujo),
          clonarObjeto(seccionCajaFlujo),
          clonarObjeto(seccionCajaFlujo),
          clonarObjeto(seccionCajaFlujo),
          clonarObjeto(seccionCajaFlujo),
          clonarObjeto(seccionCajaFlujo),
          clonarObjeto(seccionCajaFlujo),
          clonarObjeto(seccionCajaFlujo),
          clonarObjeto(seccionCajaFlujo),
          clonarObjeto(seccionCajaFlujo),
          clonarObjeto(seccionCajaFlujo),
        ]
      }
      break;
    case "bimestral":
      formatoInicial = {
        seccion: [
          clonarObjeto(seccionCajaFlujo),
          clonarObjeto(seccionCajaFlujo),
          clonarObjeto(seccionCajaFlujo),
          clonarObjeto(seccionCajaFlujo),
          clonarObjeto(seccionCajaFlujo),
          clonarObjeto(seccionCajaFlujo),
        ]
      }
      break;
    case "semestral":
      formatoInicial = {
        seccion: [
          clonarObjeto(seccionCajaFlujo),
          clonarObjeto(seccionCajaFlujo),
        ]
      }
      break;
  }
  return formatoInicial as FlujoResultado;

}
