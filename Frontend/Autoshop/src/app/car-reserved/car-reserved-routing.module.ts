import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowReservationComponent } from './containers/show-reservation/show-reservation.component';

const routes: Routes = [
  {
    path: '',
    component: ShowReservationComponent,
    pathMatch: 'full'
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarReservedRoutingModule { }
