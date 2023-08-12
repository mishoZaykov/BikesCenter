import { Component } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  constructor(private fs: Firestore , private router: Router) {}

  // Adding bike in the collection
  addBikes(f: NgForm): void {
    let bikesCollection = collection(this.fs, 'bikes', );
    
    if(f.value.model )
    addDoc(bikesCollection, f.value).then(() => {
      
      alert('Bike succesfully added')
      this.router.navigate(['/catalog'])
    })
    .catch((err) => {
      alert('There was an error creating your offer')
    })
  }

}
