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

  bike: any;

  fetchBike() {
    const id = this.activatedRoute.snapshot.params['bikeId'];

    this.service.getBikes().subscribe((bikes) => {
      this.bike = bikes.find((b) => b['id'] === id);
    });
  }

  delete(id: string) {
    this.service.deleteBikes(id).then((res) => {
      this.fetchBike();
    });
  }

  ngOnInit(): void {
    this.fetchBike();
  }
}
