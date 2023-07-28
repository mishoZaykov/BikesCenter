import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { RouterModule } from '@angular/router';
import { UserRoutingModule } from './bikes-routing.module';
import { FormsModule } from '@angular/forms';
import { CatalogComponent } from './catalog/catalog.component';

@NgModule({
  declarations: [CreateComponent, CatalogComponent],
  imports: [
    UserRoutingModule,
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  exports: [CreateComponent, CatalogComponent],
})
export class BikesModule {}
