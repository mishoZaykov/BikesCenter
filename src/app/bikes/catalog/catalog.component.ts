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

<<<<<<< HEAD
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

  addBikes(newBike: string) {
    this.service.addBikes(newBike).then((res) => {
      this.refresh();
    });
  }

  delete(id: string) {
    this.service.deleteBikes(id).then((res) => {
      this.refresh();
    });
  }
<<<<<<< HEAD
=======

  addBikes(newBike: string) {
    this.service.addBikes(newBike).then((res) => {
      this.refresh();
    });
  }

<<<<<<< HEAD
=======
  addBikes(newBike: string) {
    this.service.addBikes(newBike).then((res) => {
      this.refresh();
    });
  }

>>>>>>> parent of e9a3ed6 (Added 404 not found page)
  delete(id: string) {
    this.service.deleteBikes(id).then((res) => {
      this.refresh();
    });
  }
<<<<<<< HEAD
>>>>>>> parent of e9a3ed6 (Added 404 not found page)
=======
>>>>>>> parent of e9a3ed6 (Added 404 not found page)
=======
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
>>>>>>> parent of 59361c7 (New CRUD operations but failed)
}
