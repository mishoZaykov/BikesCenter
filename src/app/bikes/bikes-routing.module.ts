import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { CatalogComponent } from './catalog/catalog.component';
import { DetailsComponent } from './details/details.component';
import { AuthActivate } from '../core/guards/auth.activate';

const routes: Routes = [
  
  {
    path: 'create',
    component: CreateComponent,
    // canActivate: [AuthActivate]
  },
  {
    path: 'catalog',
    component: CatalogComponent
  },
  {
    path: 'details',
    children:[
      {
        path: ':bikeId',
        component: DetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
