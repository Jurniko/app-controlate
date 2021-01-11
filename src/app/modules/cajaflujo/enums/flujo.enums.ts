import { Flujo, PropiedadesFlujo } from "../interfaces/flujo";
import { PropiedadFlujo } from "../interfaces/propiedadFlujo";



export function generarFlujoInicial(tipoFragmentacion:string = "Mensual") : Flujo{
  //referencias: https://medium.com/@Farzad_YZ/3-ways-to-clone-objects-in-javascript-f752d148054d;

  tipoFragmentacion = tipoFragmentacion.toLowerCase();

  const propiedadInicial : PropiedadesFlujo = {
    ingresos: {
        aportes : 0,
        ventas :0,
        otros : 0,
      },

    egresos:{
        compraMercancia : 0,
        salarios : 0,
        consumoEnergia : 0,
        servicosPublicos : 0,
        alquiler : 0,
        publicidad : 0,
        depreciacion : 0,
        otros : 0,
    },
    financiamiento : {
      pago  : 0,
      amortizacion  : 0,
    }
  }

  let flujoInicial:Flujo | undefined ;

  switch(tipoFragmentacion){
    case "mensual":
      flujoInicial = {
        inversion: 0,
        prestamo:0,
        tasaOportunidad:0,
        tasa:0,
        seccion: [
          clonarObjeto(propiedadInicial), //Enero
          clonarObjeto(propiedadInicial), //Febrero
          clonarObjeto(propiedadInicial), //Marzo
          clonarObjeto(propiedadInicial), //Abril
          clonarObjeto(propiedadInicial), //Mayo
          clonarObjeto(propiedadInicial), //Junio
          clonarObjeto(propiedadInicial), //Julio
          clonarObjeto(propiedadInicial), //Agosto
          clonarObjeto(propiedadInicial), //Septiembre
          clonarObjeto(propiedadInicial), //Octubre
          clonarObjeto(propiedadInicial), //Noviembre
          clonarObjeto(propiedadInicial), //Diciembre
        ]
      }
      break;
    case "bimestral":
      flujoInicial = {
        inversion: 0,
        prestamo:0,
        tasaOportunidad:0,
        tasa:0,
        seccion:[
          clonarObjeto(propiedadInicial), //Enero, Febrero
          clonarObjeto(propiedadInicial), //Marzo,Abril
          clonarObjeto(propiedadInicial), //Mayo,Junio
          clonarObjeto(propiedadInicial), //Julio,Agosto
          clonarObjeto(propiedadInicial), //Septiembre,Octubre
          clonarObjeto(propiedadInicial), //Noviembre,Diciembre
        ]
      }
      break;
    case "semestral":
      flujoInicial = {
        inversion: 0,
        prestamo:0,
        tasaOportunidad:0,
        tasa:0,
        seccion: [
          clonarObjeto(propiedadInicial), //Enero, Febrero, Marzo, Abril, Mayo, Junio
          clonarObjeto(propiedadInicial), //Julio,Agosto, Septiembre, Octubre, Noviembre , Diciembre
        ]
      }
      break;
  }
  return flujoInicial as Flujo;

}
/*
* PARA EVITAR PROBLEMAS EN LA CUAL LA ASIGNACIÓN DE UN VALOR AFECTE A TODEAS LOS DEMAS OBJECTOS DE INTERFACE PropiedadInicial.
*/
function clonarObjeto(objeto : any ) : any {
  return JSON.parse(JSON.stringify(objeto))
}
