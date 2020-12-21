import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Periodo } from '../interfaces/periodo';


@Injectable({
  providedIn: 'root'
})
export class CajaflujoService {

  constructor(private angularFirestore:AngularFirestore) {}


  fCollectionPeriodo = this.angularFirestore.collection('periodo');


  crearPeriodo(periodo:Periodo){
    return this.fCollectionPeriodo.add(periodo);
  }

  getPeriodo(id:string|number){
  }

  getPeriodos(){
     return this.fCollectionPeriodo.snapshotChanges().pipe(
      map((actions:any) => actions.map((a:any) => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      })))
  }

}
