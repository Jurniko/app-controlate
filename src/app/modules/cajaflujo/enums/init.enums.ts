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
