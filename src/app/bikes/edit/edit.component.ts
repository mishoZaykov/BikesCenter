import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  selectedBike: any;
  editForm!: FormGroup;

  constructor(
    private service: ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.editForm = this.formBuilder.group({
      model: ['', Validators.required],
      imgUrl: ['', Validators.required],
      year: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['bikeId'];

    this.service.getBikes().subscribe((bikes) => {
      this.selectedBike = bikes.find((b) => b['id'] === id);
      this.populateForm();
    });
  }

  private populateForm() {
    if (this.selectedBike) {
      this.editForm.patchValue({
        model: this.selectedBike.model,
        imgUrl: this.selectedBike.imgUrl,
        year: this.selectedBike.year,
        price: this.selectedBike.price,
        description: this.selectedBike.description,
      });
    }
  }

  updateBike() {
    if (this.editForm?.valid) {
      const updateData = this.editForm.value;
      this.service.updateBikes(this.selectedBike.id, updateData)
      .subscribe(
        () => {
          alert('Bike updated successfully');
          this.router.navigate(['/details', this.selectedBike.id]);
        },
        () => {
          alert('Error updating bike');
        }
      );
    }
  }
}
