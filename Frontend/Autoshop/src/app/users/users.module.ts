import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ShowReservationComponent } from './containers/show-reservation/show-reservation.component';


@NgModule({
  declarations: [
    ShowReservationComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
