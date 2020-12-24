export interface FlujoResultado{
  seccion:  SeccionFlujoResultado []
}

export interface SeccionFlujoResultado {
  flujoCajaEconomico : number,
  flujoCajaFinanciero: number,
  saldoInicial :number,
  saldoFinal   : number
}
