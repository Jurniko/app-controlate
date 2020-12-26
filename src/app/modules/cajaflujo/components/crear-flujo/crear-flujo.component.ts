import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { generarFlujoInicial } from '../../enums/flujo.enums';
import { generarEstilosFlujo, generarFlujoResultado, generarFragmentacion, generarPropiedadesFlujo,generarTotalFlujo } from '../../enums/init.enums';
import { FlujoResultado } from '../../interfaces/cajaflujo';
import { Flujo, PropiedadesFlujo } from '../../interfaces/flujo';
import { Fragmentacion } from '../../interfaces/fragmentacion';
import { Periodo } from '../../interfaces/periodo';
import { PropiedadFlujo } from '../../interfaces/propiedadFlujo';
import { CajaflujoService } from '../../services/cajaflujo.service';

@Component({
  selector: 'app-crear-flujo',
  templateUrl: './crear-flujo.component.html',
  styleUrls: ['./crear-flujo.component.scss']
})
export class CrearFlujoComponent implements OnInit {
  estaModoFlujo : boolean = true ;
  ingresoPeriodo0 : boolean = false;
  // ======== VARIABLES DE FLUJO ===========
  idPeriodo :  string = '';
  indicesConValores : any [][] = [];
  flujoModoArray ?: any[][][];
  fragmentacion : Fragmentacion [] = generarFragmentacion("Bimestral");
  propiedades : PropiedadFlujo[] = generarPropiedadesFlujo();
  flujo : Flujo = generarFlujoInicial("Bimestral");

  total  = generarTotalFlujo("Bimestral");
  // ======== VARIABLES RESULTADOS ===========
  flujoResultado : FlujoResultado = generarFlujoResultado("Bimestral");
  parametroFragmentacion : string = "Bimestral";
  //===========VARIABLE DE ESTILO=============
  css = generarEstilosFlujo("Bimestral")
  /* {
    seccion: [
      {ingresos : 100,
       egresos : 200,
       financiamiento : 500},
      {ingresos : 600,
        egresos : 200,
        financiamiento : 100}
    ]
  }
  */
  constructor(private rutaActiva:ActivatedRoute, private cajaFlujoService: CajaflujoService ) { }

  ngOnInit(): void {
    this.rutaActiva.params.subscribe((params:Params)=>{
      console.log(params)
      this.idPeriodo = params.id
    })
    this.cuadroAmortizacion();

  }

  comenzarFlujo(){
    this.flujoModoArray = this.pintarFlujo(this.flujo);
    this.ingresoPeriodo0 = true;
  }

  pintarFlujo(flujo:any) : any[][][]{ //flujo:Flujo :c
    let dividido:any;
    let indiceSeccion = 0;
    let indiceFila = 0;
    let indicePropiedad = 0 ;
    let valor = 0;
    console.log(flujo.seccion)
    for( let i = 0 ; i < flujo.seccion.length ; i++){ // el i = hace referencia a que seccion es
      if(!dividido){ dividido = [] }else{ // Creamos la primera forma flujoModoArray[indiceSeccion]
        dividido.push();
      }
     // console.log(dividido)
      indiceSeccion = i;
      /*
      * Forma de nuestro Array para pintar el HTML
      * flujoModoArray[seccionID][filaID][subtituloID] -> devolverá el valor del input
      */
      Object.keys(flujo.seccion[i]).map((nomPropiedad:string, inFila:number) => { // Ingresamos a las propiedades de la FILA
        if(!dividido[indiceSeccion]){ dividido[indiceSeccion] = [] }else{  // Creamos la segunda forma flujoModoArray[iSeccion][iFila]
          dividido[indiceSeccion].push([]);
        }
        //console.log(dividido)
        indiceFila =  inFila ;
        Object.values( flujo.seccion[i][nomPropiedad] ).map((valorPropiedad, inPropiedad)=>{ // Ingresamos a los valores de las PROPEIDADES
          if(!dividido[indiceSeccion][indiceFila]){ dividido[indiceSeccion][indiceFila] = [valorPropiedad] }else{  // Creamos la tercera forma flujoModoArray[iSeccion][iFila][iPropiedad]
            dividido[indiceSeccion][indiceFila].push(valorPropiedad);
          }

          //indicePropiedad = inPropiedad;
        })
      })
    }
    return dividido;
  }

  agregarValores(seccionID : number){
    let totalSeccion;
    let idTitulo : number = 0;
    let myflujoSeccion:any;
    let indicesPertenecientesSeccion : any ;
    indicesPertenecientesSeccion  = this.indicesConValores;
    indicesPertenecientesSeccion  =  indicesPertenecientesSeccion.filter((data : any [])=> data[0] == seccionID) //[0] hacer referencia a la seccion en la que se encuentra
    .map((res : any[] )=>{
    res.splice(0,1)
    return res;
    }) // Eliminamos el primer indice ( Seccion ), ya que sabemos en que seccion está

    myflujoSeccion = this.flujo.seccion[seccionID] // Ingresamos a la sección en la que se pulso AGREGAR
    //console.log(Object.keys(seleccionarSeccion)) // se hace un array las propiedades de los flujos(Ingresos, Egresos, financiamiento) - nos interesa su indice
    // ASIGNANDO VALORES EN FUNCIÓN AL TITULO O PROPIEDAD EN AL QUE SE ENCUENTRA.

    console.log(myflujoSeccion,"myflujo")
    let nombreTitulo = '';
    let nombrePropiedad = '';

    for(let i = 0 ; i <  indicesPertenecientesSeccion.length ; i++){
      for(let j = 0 ; j < indicesPertenecientesSeccion[i].length ; j++){
        if(j==0){ // fila o titulo [x, , ]
          Object.keys(myflujoSeccion).map((nombreFila:string,indiceFila:number)=>{ // Sacamos las propiedades, y entraremos en la primera
            //console.log(seleccionarSeccion[valor] )
            //console.log(nombreFila)
            if( indiceFila == indicesPertenecientesSeccion[i][j] ){ // Verificamos que el indice del titulo del flujo(object) sea igual al indice ingresado por filaID
              nombreTitulo = nombreFila;
              //console.log(nombreFila)
              idTitulo = indiceFila;
            }
          })
        }else if( j==1){ // propiedad [ , x , ]
          Object.keys(myflujoSeccion[nombreTitulo]).map((nomPropiedad:string,indicePropiedad:number)=>{
            if( indicePropiedad == indicesPertenecientesSeccion[i][j]){ // Verificamos que el indice de la propiedad del flujo(object) sea igual al inidice ingresado por subitituloID
              //console.log(nombrePropiedad)
              nombrePropiedad = nomPropiedad // -> nombPropiedad, para que no haya problemas

            }
          })
        }else if( j==2 ){ // valor
          //console.log(nombreTitulo,nombrePropiedad, indicesPertenecientesSeccion[i][j])
          myflujoSeccion[nombreTitulo][nombrePropiedad] = indicesPertenecientesSeccion[i][j]; // le Actualizamos el valor
          /*
          * ENTRA POR CADA TITULO !!!!!
          ! NO FUNCIONA EL -= Number() en vez de restar SUMA!!
          */
          let valorIngresado = +indicesPertenecientesSeccion[i][j];

          this.total.seccion[seccionID][idTitulo] +=  valorIngresado; // Almacenamos el total sumando por cada titulo

          // ===================== FLUJO ECONOMICO =================
          if(nombreTitulo != "financiamiento"){
            nombreTitulo == "ingresos" ? this.total.seccion[seccionID][3] +=  +valorIngresado :  this.total.seccion[seccionID][3] -= +valorIngresado
            // SI ES INGRESO  SUMARA Y SI ES EGRESO RESTARA
            if(nombrePropiedad == "depreciacion"){ // SE LE SUMARA Y SE LE RESTARA SU VALOR - > PORQUE ES UN GASTO QUE NO SE DESEMBOLSA

              this.total.seccion[seccionID][3] +=  +valorIngresado
            }
          }

        }
      }
    }
      // ===================== FLUJO FINANCIERO  =================


      this.total?.seccion[seccionID][4]  = this.total?.seccion[seccionID][3];
      console.log(this.total?.seccion[seccionID][3] , - this.flujo.seccion[seccionID].financiamiento.amortizacion , - this.flujo.seccion[seccionID].financiamiento.pago)
      this.total?.seccion[seccionID][4] -= (this.flujo.seccion[seccionID].financiamiento.amortizacion + this.flujo.seccion[seccionID].financiamiento.pago)
      console.log(this.total?.seccion[seccionID][4])
      console.log(this.flujo)
  }

  calculoSaldos(){
    this.total?.seccion.map((e : any, indiceSeccion)=>{
      if(e[5]==0 && indiceSeccion == 0){ // cuando se esta calculando primera vez
        e[5] = this.flujo.prestamo - this.flujo.inversion // EL SALDO INICIAL PRIMER PERIODO = Prestamo - Inversion
        console.log(e[5] , " Primer saldo inicial periodo 1 ")
        e[6] = e[5] + e[4]; // Saldo final = saldo inicial ([5])+ flujo de caja financiero ([4])

      }else{
        console.log("segundo periodo, saldo inicial", this.total?.seccion[indiceSeccion-1][6])
        e[5] = this.total?.seccion[indiceSeccion-1][6]; // Una seccion anterir y que tome saldo final [6]
        e[6] = e[5] + e[4];
      }
    })
    console.log(this.total , "TOTAL DE TOTALES")
  }


  valorInput(seccionID : number, filaID : number ,subtituloID : number, valor:number|string){

    if(!this.indicesConValores){ // Cuando no inicializa aún
      this.indicesConValores = [[seccionID,filaID,subtituloID,valor]]
    }
    this.indicesConValores.push([seccionID,filaID,subtituloID,valor])
  }

  cuadroAmortizacion(){
    let indiceOfFinanciamiento;
    this.propiedades.forEach((propiedad, indiceProp)=>{
      if(propiedad.titulo.toLowerCase() == "financiamiento" ){
        indiceOfFinanciamiento = indiceProp
      }
    })


    /*
    {ingresos : 100, i 4
       egresos : 200, i 5
       financiamiento : 500}, i 6

      flujoCajaEconomico : number, i 3
      flujoCajaFinanciero: number, i 4
      saldoInicial :number, i 5
      saldoFinal   : number i 6
    */

    let numPeriodos:number = 12 ;
    let saldoInicial:number = +this.flujo.prestamo; // EL SIGNO +this.flujo -> arregla el problema u.u
    let tasainteres:number = +this.flujo.tasa;  //TASA DE INTERES MENSUAL
    let interes:number = 0;
    let cuota = ((saldoInicial*tasainteres*Math.pow(1+tasainteres,numPeriodos))/ (Math.pow(+tasainteres+1,numPeriodos)-1)).toFixed(3)
    let amortizacion:number = 0;
    let saldoFinal:number = 0;

    let acumuladorIntereses:number = 0;
    let acumuladorAmortizacion:number = 0;

    let indiceSeccion:number = 0 ;
    for(let mes = 1 ; mes <= 12 ; mes++){
      interes = tasainteres*saldoInicial;
      amortizacion = +cuota - interes;
      saldoFinal = saldoInicial-amortizacion;

      acumuladorIntereses += interes;
      acumuladorAmortizacion += amortizacion;
      console.log("interes",interes )
      console.log("amor",amortizacion )
      console.log("si",saldoInicial )
      console.log("sf",saldoFinal )
      if(this.parametroFragmentacion.toLowerCase() == "semestral" && mes == 6){
        this.flujo.seccion[indiceSeccion].financiamiento.pago =  Number(acumuladorIntereses.toFixed(4));
        this.flujo.seccion[indiceSeccion].financiamiento.amortizacion =  Number(acumuladorIntereses.toFixed(4));
        acumuladorIntereses = 0 ;
        acumuladorAmortizacion = 0;
        indiceSeccion ++ ;
      }else if(this.parametroFragmentacion.toLowerCase() == "bimestral" && (mes%2) == 0){ // El resto es 0 o divisible entre dos

        this.flujo.seccion[indiceSeccion].financiamiento.pago = Number(acumuladorIntereses.toFixed(4));
        this.flujo.seccion[indiceSeccion].financiamiento.amortizacion = Number(acumuladorAmortizacion.toFixed(4));
        acumuladorIntereses = 0 ;
        acumuladorAmortizacion = 0;
        indiceSeccion ++ ;
      }else if(this.parametroFragmentacion.toLowerCase() == "mensual"){
        this.flujo.seccion[indiceSeccion].financiamiento.pago = Number(acumuladorIntereses.toFixed(4));
        this.flujo.seccion[indiceSeccion].financiamiento.amortizacion = Number(acumuladorAmortizacion.toFixed(4));
        acumuladorIntereses = 0 ;
        acumuladorAmortizacion = 0;
        indiceSeccion ++ ;
      }

      saldoInicial = saldoFinal

    }
    console.log("RESULTADO DE AMORTIZACIONES", this.flujo)
  }


  convertirTasaInteres(tasaAnual : number, tipoFragmentacion : string = "Mensual" ){
    tipoFragmentacion = tipoFragmentacion.toLowerCase();
    this.flujo.tasa = (Math.pow(+tasaAnual+1,1/12)-1)
    console.log(this.flujo.tasa,"TASA CONVERTIDA")
  }
}
