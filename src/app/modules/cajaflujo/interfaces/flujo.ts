export interface Flujo{
    id?: string | number
    periodo_id?: string
    inversion : number
    prestamo : number
    tasa : number
    seccion: PropiedadesFlujo[]
}


export interface PropiedadesFlujo{
    ingresos:{
      aportes: number
      ventas: number
      otros: number
    }
    egresos:{
      compraMercancia: number
      salarios:number
      consumoEnergia:number
      impuestos:number
      servicosPublicos:number
      alquiler:number
      publicidad:number
      depreciacion:number
      otros:number
    }
    financiamiento : {
    prestamos : number
    pago : number
    amortizacion :number
  }
}
