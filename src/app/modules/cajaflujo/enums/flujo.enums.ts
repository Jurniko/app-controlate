import { Flujo, PropiedadesFlujo } from "../interfaces/flujo";

let propiedadInicial : PropiedadesFlujo = {
  ingresos: {
      aportes : 0,
      ventas :0,
      otros : 0,
    },

  egresos:{
      compraMercancia : 0,
      salarios : 0,
      consumoEnergia : 0,
      impuestos : 0,
      servicosPublicos : 0,
      alquiler : 0,
      publicidad : 0,
      depreciacion : 0,
      otros : 0,
  },
  financiamiento : {
    prestamos  : 0,
    pago  : 0,
    amortizacion  : 0,
  }
}

export function generarFlujoInicial(tipoFragmentacion:string = "Mensual") : Flujo{
  tipoFragmentacion = tipoFragmentacion.toLowerCase();

  let flujoInicial:Flujo ;

  switch(tipoFragmentacion){
    case "mensual":
      flujoInicial = {
        seccion: [
          propiedadInicial, //Enero
          propiedadInicial, //Febrero
          propiedadInicial, //Marzo
          propiedadInicial, //Abril
          propiedadInicial, //Mayo
          propiedadInicial, //Junio
          propiedadInicial, //Julio
          propiedadInicial, //Agosto
          propiedadInicial, //Septiembre
          propiedadInicial, //Octubre
          propiedadInicial, //Noviembre
          propiedadInicial, //Diciembre
        ]
      }
      break;
    case "bimestral":
      flujoInicial = {
        seccion: [
          propiedadInicial, //Enero, Febrero
          propiedadInicial, //Marzo,Abril
          propiedadInicial, //Mayo,Junio
          propiedadInicial, //Julio,Agosto
          propiedadInicial, //Septiembre,Octubre
          propiedadInicial, //Noviembre,Diciembre
        ]
      }
      break;
    case "semestral":
      flujoInicial = {
        seccion: [
          propiedadInicial, //Enero, Febrero, Marzo, Abril, Mayo, Junio
          propiedadInicial, //Julio,Agosto, Septiembre, Octubre, Noviembre , Diciembre
        ]
      }
      break;
  }
  return flujoInicial;

}
