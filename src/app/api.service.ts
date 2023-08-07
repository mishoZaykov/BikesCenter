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
import { getDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private fs: Firestore, private router: Router) {}


  getBikes() {
    let bikesCollection = collection(this.fs, 'bikes');
    return collectionData(bikesCollection, { idField: 'id' });
  }

  deleteBikes(id: string) {
    let docRef = doc(this.fs, `bikes/${id}`);
    return deleteDoc(docRef);
  }
}
