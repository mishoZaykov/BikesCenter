import { Injectable } from '@angular/core';
import {
  Firestore,
  collectionData,
  collection,
  addDoc,
  doc,
  deleteDoc,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { Bike } from './types/bike';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private fs: Firestore, private router: Router) {}

  // adding a new bike
  addBike(bike: Bike): Observable<void> {
    const ref = doc(this.fs, 'bikes', bike?.ownerId);
    return from(setDoc(ref, bike));
  }

  updateBike(bike: Bike): Observable<any> {
    const ref = doc(this.fs, 'bikes', bike?.ownerId);
    return from(updateDoc(ref, { ...bike }));
  }

  // getBike(id: string) {
  //   let bikesCollection = collection(this.fs, 'bikes');
  //   return collectionData(bikesCollection, { idField: id });
  // let docRef = doc(this.fs, 'bikes', id );
  // let docSnap = await getDoc(docRef)
  // return docSnap
  // }

  // getBikes() {
  //   let bikesCollection = collection(this.fs, 'bikes');
  //   return collectionData(bikesCollection, { idField: 'id' });
  // }

  // deleteBikes(id: string) {
  //   let docRef = doc(this.fs, `bikes/${id}`);
  //   return deleteDoc(docRef);
  // }
}
