import { Flujo } from "../interfaces/flujo";

export let flujoInicial : Flujo = {
  seccion: [
    {
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
        Amortizacion  : 0,
      }
    }]
}

