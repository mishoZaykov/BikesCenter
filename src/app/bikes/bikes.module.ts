import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { RouterModule } from '@angular/router';
import { UserRoutingModule } from './bikes-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CatalogComponent } from './catalog/catalog.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [CreateComponent, CatalogComponent, DetailsComponent, EditComponent],
  imports: [
    UserRoutingModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [CreateComponent, CatalogComponent, DetailsComponent],
})
export class BikesModule {}
