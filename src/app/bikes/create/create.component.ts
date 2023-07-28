import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Bike } from 'src/app/types/bike';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  bikesList: Bike[] = [];
  bikeObj: Bike = {
    id: '',
    model: '',
    imgUrl: '',
    year: '',
    price: '',
    description: '',
  };

  id: string = '';
  model: string = '';
  imgUrl: string = '';
  year: string = '';
  price: string = '';
  description: string = '';

  constructor(private service: ApiService) {}

  ngOnInit(): void {}

  resetForm(){
    this.id= '';
    this.model= '';
    this.imgUrl= '';
    this.year= '';
    this.price= '';
    this.description= '';
  }

  addBike() {
    if (
      this.model == '' ||
      this.imgUrl == '' ||
      this.year == '' ||
      this.price == '' ||
      this.description == ''
    ) {
      alert('Fill all unput fields');
      return;
    }

    this.bikeObj.id = ''
    this.bikeObj.model = this.model
    this.bikeObj.imgUrl = this.imgUrl
    this.bikeObj.year = this.year
    this.bikeObj.price = this.price
    this.bikeObj.description = this.description

    this.service.addBike(this.bikeObj);
    this.resetForm();
  }

  // refresh() {
  //   this.service.getBikes().subscribe((res) => {
  //     this.bikes = res;
  //     console.log(res);

  //   });
  // }

  // ngOnInit(): void {
  //   this.refresh();

  // }

  // addBikes(newBike:string){
  //   this.service.addBikes(newBike).then((res) => {
  //     console.log(res);
  //     this.refresh();
  //   })
  // }
}
