import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Flujo } from '../interfaces/flujo';
import { Periodo } from '../interfaces/periodo';
import { generarFragmentacion, generarPropiedadesFlujo } from '../enums/init.enums'

@Injectable({
  providedIn: 'root'
})
export class CajaflujoService {

  constructor(private angularFirestore:AngularFirestore) {}

  fCollectionFlujo = this.angularFirestore.collection('flujo')
  fCollectionPeriodo = this.angularFirestore.collection('periodo');
  fCollectionFragmentacion = this.angularFirestore.collection('fragmentacion');
  fCollectionPropiedades= this.angularFirestore.collection('propiedades');


  crearPeriodo(periodo:Periodo){
    return this.fCollectionPeriodo.add(periodo);
  }

  crearFlujo(flujo:Flujo){
    return this.fCollectionFlujo.add(flujo);
  }

  getFlujo(id:string){
    return this.fCollectionFlujo.ref.where('periodo_id',"==",id).get();
  }

  getPeriodo(id:string){
    //this.fCollectionPeriodo.ref.where('id','==',id).get()
    return this.fCollectionPeriodo.doc(id).get();
  }

  getFragmentos(){
    return this.fCollectionFragmentacion.snapshotChanges().pipe(
      map((actions:any) => actions.map((a:any) => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      })))
  }

  getPropiedades(){
    return this.fCollectionPropiedades.snapshotChanges().pipe(
      map((actions:any) => actions.map((a:any) => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      })))
  }

  getPeriodos(){
     return this.fCollectionPeriodo.snapshotChanges().pipe(
      map((actions:any) => actions.map((a:any) => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      })))
  }

  initData(){
      let fragmentaciones = generarFragmentacion() ;
      fragmentaciones.map(e=>{
        this.fCollectionFragmentacion.add(e);
      })
      let propiedadesFlujo = generarPropiedadesFlujo();
      propiedadesFlujo.map(e=>{
      this.fCollectionPropiedades.add(e);
      })

  }



}
