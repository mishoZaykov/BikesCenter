import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  constructor(
    private service: ApiService,
    private activatedRoute: ActivatedRoute
  ) {}


  bikes: any = [];

  //TODO: Nedd to fix to get only one bike not all
  fetchBike(){
    const id = this.activatedRoute.snapshot.params['bikeId'];
    console.log(id);
    this.service.getBike(id).subscribe((bike) => {
      
      for (const bikeId of bike) {
          console.log(bikeId);
        
      }
      this.bikes = bike;
      
     
    });
  }
  

  ngOnInit() : void {
    this.fetchBike();
  }
}
