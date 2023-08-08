import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  constructor(
    private service: ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  bike: any;
  id: any;
  fetchBike() {
    this.service.getBikes().subscribe((bikes) => {
      this.bike = bikes.find((b) => b['id'] === this.id);
    });
  }

  //TODO
  delete() {
    const confirmed = window.confirm(
      'Are you sure you want to delete the offer?'
    );

    if (confirmed) {
      this.service.deleteBikes(this.id).subscribe(
        () => {
          alert('Offer deleted successfully');
          this.router.navigate(['/catalog']);
        },
        (error) => {
          console.error('Error deleting bike', error);
        }
      );
    }
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['bikeId'];
    this.fetchBike();
  }
}
