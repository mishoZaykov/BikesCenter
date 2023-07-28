import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Bike } from 'src/app/types/bike';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  bikesList: Bike[] = [];
  id: string = '';
  model: string = '';
  imgUrl: string = '';
  year: number = 0;
  price: number = 0;
  description: string = '';

  constructor(private service: ApiService) {}

  ngOnInit(): void {
    this.getAllBikes()
  }

  getAllBikes() {
    this.service.getAllBikes().subscribe(
      (res) => {
        this.bikesList = res.map((e: any) => {
          const data = e.payload.doc.data();
          data.id = e.payload.doc.id;
          return data;
        });
      },
      (err) => {
        alert('Error while fetching data');
      }
    );
  }

  // bikes: any = [];

  // refresh() {
  //   this.service.getBikes().subscribe((res) => {
  //     this.bikes = res;
  //   });
  // }

  // ngOnInit(): void {
  //   this.refresh();
  // }
}
