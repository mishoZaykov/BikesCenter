import { Injectable } from '@angular/core';
import {
  Firestore,
  collectionData,
  collection,
  doc,
  deleteDoc,
} from '@angular/fire/firestore';
import { updateDoc } from 'firebase/firestore';
import { Observable, from, map } from 'rxjs';
import { UserService } from './user/user.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private fs: Firestore, private userService: UserService) {}

  // Gets all the bikes from the collection
  getBikes() {
    let bikesCollection = collection(this.fs, 'bikes');
    return collectionData(bikesCollection, { idField: 'id' });
  }

  // Deleting a bike by its id
  deleteBikes(id: string): Observable<void> {
    let docRef = doc(this.fs, 'bikes', id);
    return from(deleteDoc(docRef));
  }

  // Updating a bike by its id 
  updateBikes(id:string, updateBike: any): Observable<void>{
    let docRef = doc(this.fs, 'bikes', id);
    return from(updateDoc(docRef, updateBike))
  }

  // Returns true if user is logged in, false otherwise
  userLoggedIn(): Observable<boolean> {
    return this.userService.currentUser$.pipe(
      map((user) => {
        return !!user
      })
    )
  }
}
