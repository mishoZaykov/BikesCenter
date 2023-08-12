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

  // Renders all the bikes in the gatalog
  refresh() {
    this.service.getBikes().subscribe((res) => {
      this.bikes = res;
    });
  }

  ngOnInit(): void {
    this.refresh();
  }

  // Checks if the catalog is empty
  emptyCatalog(): boolean {
    return this.bikes.length === 0;
  }
  
}
