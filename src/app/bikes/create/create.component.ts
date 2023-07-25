import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  constructor(private service: ApiService) {}

  bikes: any = [];

  refresh() {
    this.service.getBikes().subscribe((res) => {
      this.bikes = res;
      console.log(res);
      
    });
  }

  ngOnInit(): void {
    this.refresh();
    
  }

  addBikes(newBike:string){
    this.service.addBikes(newBike).then((res) => {
      console.log(res);
      this.refresh();
    })
  }
}
