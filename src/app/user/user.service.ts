import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, authState,  updateProfile, UserInfo } from '@angular/fire/auth'
import { Observable, concatMap, from, of, switchMap } from 'rxjs';
import { Storage, ref} from '@angular/fire/storage'
import { getDownloadURL, uploadBytes } from 'firebase/storage';
import { Firestore, docData } from '@angular/fire/firestore';
import { ProfileUser } from '../types/user-profile';
import { doc, setDoc, updateDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  currentUser$ = authState(this.auth)

  get currentUserProfile$(): Observable<ProfileUser | null> {
    return this.currentUser$.pipe(
      switchMap(user => {
        if(!user?.uid) {
          return of(null)
        }

        const ref = doc(this.firestore, 'users', user?.uid);
        return docData(ref) as Observable<ProfileUser>;
      })
    )
  }

  constructor( private auth: Auth, private storage: Storage, private firestore: Firestore) {}

  //new login
  login(email: string, password: string){
   return from(signInWithEmailAndPassword(this.auth, email, password))
  }


  //new register method 
  register( email: string, password: string){
    return from(createUserWithEmailAndPassword(this.auth, email, password))
  }

  // updating profile
  updateProfileData(profileData: Partial<UserInfo>): Observable<any> {
    const user = this.auth.currentUser;
    return of(user).pipe(
      concatMap(user => {
        if(!user) throw new Error('Not Authenticated');

        return updateProfile(user, profileData)
      })
    )  
  }

  //new logout
  logout(){
    return from(this.auth.signOut())
  }

   get isLogedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null ? true : false;    
  }

  // uploading image
  uploadImage(image: File, path: string): Observable<string> {
    const storageRef = ref(this.storage, path);
    const uploadTask = from(uploadBytes(storageRef, image));
    return uploadTask.pipe(
      switchMap((result) => getDownloadURL(result.ref))
    );
  }
  
  // adding a new user
  addUser(user: ProfileUser): Observable<any> {
    const ref = doc(this.firestore, 'users', user?.uid)
    return from(setDoc(ref, user));
  }

  // updating the current user
  updateUser(user: ProfileUser): Observable<any> {
    const ref = doc(this.firestore, 'users', user?.uid)
    return from(updateDoc(ref, {...user}));
  }
}
