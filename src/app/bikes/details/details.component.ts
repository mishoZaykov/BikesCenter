<<<<<<< HEAD
import { Component } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
>>>>>>> parent of 59361c7 (New CRUD operations but failed)

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
<<<<<<< HEAD
export class DetailsComponent {

=======
export class DetailsComponent implements OnInit {
  constructor(
    private service: ApiService,
    private activatedRoute: ActivatedRoute
  ) {}


  bikes: any = [];

  //TODO: Nedd to fix to get only one bike not all
  fetchBike(){
    const id = this.activatedRoute.snapshot.params['bikeId'];

    this.service.getBike(id).subscribe((bike) => {
      this.bikes = bike;

      console.log(this.bikes)
    });
  }
  

  ngOnInit() : void {
    this.fetchBike();
  }
>>>>>>> parent of 59361c7 (New CRUD operations but failed)
}
