import { PropiedadesFlujo } from "../interfaces/flujo";
import { Fragmentacion} from "../interfaces/fragmentacion";
import { PropiedadFlujo } from "../interfaces/propiedadFlujo";

export function generarFragmentacion() : Fragmentacion []{

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
  return fragmentos;
}




export function generarPropiedadesFlujo() : PropiedadFlujo[]{
  let propiedades:PropiedadFlujo [] = [
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
    "Otros"]
  },
  {
    titulo : "Financiamiento",
    subtitulos: [
      "Préstamos recibidos",
    "Pago de Préstamos",
    "Amortización"]
  },
  {
    titulo : "Ingresos",
    subtitulos: [
      "Aportes",
    "Ventas en Efectivo",
    "Otros"]
  }]

  return propiedades;
}
