import { Injectable } from '@angular/core';
import {
  Firestore,
  collectionData,
  collection,
  addDoc,
  doc,
  deleteDoc,
  documentId,
} from '@angular/fire/firestore';
import {  getDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private fs: Firestore) {}

  getBike(id: string) {
    let bikesCollection = collection(this.fs, 'bikes');
    return collectionData(bikesCollection, { idField: id });
    // let docRef = doc(this.fs, `bikes/${id}`, );
    // let docSnap = await getDoc(docRef)
    // return docSnap
  }

  getBikes() {
    let bikesCollection = collection(this.fs, 'bikes');
    return collectionData(bikesCollection, { idField: 'id' });
  }

  addBikes(desc: string) {
    let data = { description: desc };
    let bikesCollection = collection(this.fs, 'bikes');
    return addDoc(bikesCollection, data);
  }

  deleteBikes(id: string) {
    let docRef = doc(this.fs, `bikes/${id}`);
    return deleteDoc(docRef);
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
