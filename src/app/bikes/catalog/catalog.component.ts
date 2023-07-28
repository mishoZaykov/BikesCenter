import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  constructor(private service: ApiService) {}

  bikes: any = [];

  refresh() {
    this.service.getBikes().subscribe((res) => {
      this.bikes = res;
    });
  }

  ngOnInit(): void {
    this.refresh();
  }

  // addBikes(newBike: string) {
  //   this.service.addBikes(newBike).then((res) => {
  //     this.refresh();
  //   });
  // }

  // delete(id: string) {
  //   this.service.deleteBikes(id).then((res) => {
  //     this.refresh();
  //   });
  // }
}
