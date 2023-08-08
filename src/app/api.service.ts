import { Injectable } from '@angular/core';
import {
  Firestore,
  collectionData,
  collection,
  doc,
  deleteDoc,
} from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { updateDoc } from 'firebase/firestore';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private fs: Firestore, private router: Router, private activatedRoute: ActivatedRoute,) {}


  getBikes() {
    let bikesCollection = collection(this.fs, 'bikes');
    return collectionData(bikesCollection, { idField: 'id' });
  }

  deleteBikes(id: string): Observable<void> {
    let docRef = doc(this.fs, 'bikes', id);
    return from(deleteDoc(docRef));
  }

  
  updateBikes(id:string, updateBike: any): Observable<void>{
    let docRef = doc(this.fs, 'bikes', id);
    return from(updateDoc(docRef, updateBike))
  }
}
