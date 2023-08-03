import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, authState,  updateProfile } from '@angular/fire/auth'
import { from, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  currentUser$ = authState(this.auth)

  constructor( private auth: Auth) {}

  //new login
  login(email: string, password: string){
   return from(signInWithEmailAndPassword(this.auth, email, password))
  }


  //new register method 
  register(name: string, email: string, password: string){
    return from(createUserWithEmailAndPassword(this.auth, email, password)
    ).pipe(switchMap(({user}) => updateProfile(user, {displayName: name})))
  }


  //new logout
  logout(){
    return from(this.auth.signOut())
  }

   get isLogedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null ? true : false;    
  }
  
}
