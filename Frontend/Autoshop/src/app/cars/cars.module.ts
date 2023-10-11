import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
//import { IndexCarsComponent } from './containers/index-cars/index-cars.component';
import { ShowCarComponent } from './containers/show-car/show-car.component';


@NgModule({
  declarations: [
    //IndexCarsComponent,
    ShowCarComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule
  ]
})
export class CarsModule { }
