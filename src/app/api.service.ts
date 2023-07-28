import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Bike } from './types/bike';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private afs: AngularFirestore) {}

  // add bike
  addBike(bike: Bike) {
    bike.id = this.afs.createId();
    return this.afs.collection('/Bikes').add(bike);
  }

  //get all bikes
  getAllBikes() {
    return this.afs.collection('/Bikes').snapshotChanges();
  }

  // delete bike
  deleteBike(bike: Bike) {
    return this.afs.doc('/Bikes/' + bike.id).delete();
  }

  // update bike
  updateBike(bike: Bike) {
    this.deleteBike(bike);
    this.addBike(bike);
  }

  // getBike(id: string) {
  //   let bikesCollection = collection(this.fs, 'bikes');
  //   return collectionData(bikesCollection, { idField: id });
  // let docRef = doc(this.fs, `bikes/${id}`, );
  // let docSnap = await getDoc(docRef)
  // return docSnap
  // }

  // getBikes() {
  //   let bikesCollection = collection(this.fs, 'bikes');
  //   return collectionData(bikesCollection, { idField: 'id' });
  // }

  // addBikes(desc: string) {
  //   let data = { description: desc };
  //   let bikesCollection = collection(this.fs, 'bikes');
  //   return addDoc(bikesCollection, data);
  // }

  // deleteBikes(id: string) {
  //   let docRef = doc(this.fs, `bikes/${id}`);
  //   return deleteDoc(docRef);
  // }
}
