import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { RouterModule } from '@angular/router';
import { UserRoutingModule } from './bikes-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateComponent],
  imports: [UserRoutingModule,CommonModule, RouterModule, FormsModule],
  exports: [CreateComponent],
})
export class BikesModule {}
