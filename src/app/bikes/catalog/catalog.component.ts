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

  emptyCatalog(): boolean {
    return this.bikes.length === 0;
  }
  
}
