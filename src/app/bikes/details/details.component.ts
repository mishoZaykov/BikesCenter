import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Bike } from 'src/app/types/bike';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  bikesList: Bike[] = [];
  id: string = '';
  model: string = '';
  imgUrl: string = '';
  year: number = 0;
  price: number = 0;
  description: string = '';

  constructor(private service: ApiService, ) {}

  ngOnInit(): void {}

  deleteBikes(bike: Bike) {
    if(window.confirm('Are you sure you want to delete the bike')){
      this.service.deleteBike(bike)
    }
  }

  // bikes: any = [];

  // //TODO: Nedd to fix to get only one bike not all
  // fetchBike(){
  //   const id = this.activatedRoute.snapshot.params['bikeId'];

  //   this.service.getBike(id).subscribe((bike) => {
  //     this.bikes = bike;

  //     console.log(this.bikes)
  //   });
  // }
  

  // ngOnInit() : void {
  //   this.fetchBike();
  // }
}
