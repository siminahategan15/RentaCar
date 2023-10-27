import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexUserComponent } from './containers/index-user/index-user.component';
import { ShowUserComponent } from './containers/show-user/show-user.component';
import { ShowReservationComponent } from './containers/show-reservation/show-reservation.component';

const routes: Routes = [

  {
    path: '',
    component: IndexUserComponent,
    pathMatch: 'full'
  },
  {
    path:':id',
    component: ShowUserComponent
  },
  {
    path: 'reservations/:id',
    component: ShowReservationComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
