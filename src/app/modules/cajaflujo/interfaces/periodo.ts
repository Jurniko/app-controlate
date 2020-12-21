
let periodo = {
  ano: 2018,
  fragmentacion: "Semestral"
}



let test  = {
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
          servicosPublicos:150
          //....
      }
      //...
    }
  ]
}
let fragmentacion  = {
  fragmentacion : "Semestral",
  seccion:[
    {
      meses:["Enero","Febrero","Marzo","Abril","Mayo","Junio"]
    },
    {
      meses:["Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
    },
  ],
}







export interface Periodo {
  id?: string
  ano:string
  fragmentacion:string
}
