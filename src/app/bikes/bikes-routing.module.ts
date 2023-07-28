import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { CatalogComponent } from './catalog/catalog.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  
  {
    path: 'create',
    component: CreateComponent
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
