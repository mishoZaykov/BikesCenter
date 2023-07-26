import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private fireauth: AngularFireAuth, private router: Router) {}

  //login
  login(email: string, password: string) {
      this.fireauth.signInWithEmailAndPassword(email, password).then(
      () => {
        localStorage.setItem('user', 'true');
        this.router.navigate(['/home']);
               
      },
      (err) => {
        alert(err.message);
        this.router.navigate(['/login']);
      }
    );
  }


  //register
  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(
      () => {
        alert('Registration Successful');
        this.router.navigate(['/login']);
      },
      (err) => {
        alert(err.message);
        this.router.navigate(['/register']);
      }
    );
  }

  //logout
  logout() {
    this.fireauth.signOut().then(
      () => {
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
      },
      (err) => {
        alert(err.message);
      }
    );
  }

   get isLogedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null ? true : false;    
  }
  
}
