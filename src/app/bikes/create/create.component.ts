import { Component } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { FormControl, FormGroup, NgForm, NonNullableFormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { HotToastService } from '@ngneat/hot-toast';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
 

  bikeForm = this.fb.group({
    ownerId: [''],
    model: [''],
    imgUrl: [''],
    year: [''],
    price: [''],
    description: [''],
  })

  constructor(
    private fs: Firestore,
    private router: Router,
    private fb: NonNullableFormBuilder,
    private bikeService: ApiService,
    private toast: HotToastService,
  ) {}

  addBike(): void {

    const bikeData = this.bikeForm.value;
    this.bikeService.updateBike(bikeData).pipe(
      this.toast.observe({
        loading: 'Updating data...',
        success: 'Data has been updated',
        error: 'There was an error'
      })
    ).subscribe()

    // let bikesCollection = collection(this.fs, 'bikes');

    // if (f.value.model)
    //   addDoc(bikesCollection, f.value)
    //     .then(() => {
    //       alert('Bike succesfully added');
    //       this.router.navigate(['/catalog']);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
  }
}
