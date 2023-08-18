import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { CatalogComponent } from './catalog/catalog.component';
import { DetailsComponent } from './details/details.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { EditComponent } from './edit/edit.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  
  {
    path: 'create',
    component: CreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'catalog',
    component: CatalogComponent,
  },
  {
    path: 'details',
    canActivate: [AuthGuard],
    children:[
      {
        path: ':bikeId',
        component: DetailsComponent,
      },
      
    ]
  },
  {
    path: 'edit',
    canActivate: [AuthGuard],
    children:[
      {
        path: ':bikeId',
        component: EditComponent,
      },
      
    ]
  },
 
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
