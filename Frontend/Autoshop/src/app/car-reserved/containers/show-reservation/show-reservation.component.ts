import { Component } from '@angular/core';
import { CarReservedService } from '../../services/car-reserved.service';
import { ICar } from 'src/app/cars/models/car';
import { LoginService } from 'src/app/login/services/login.service';

@Component({
  selector: 'app-show-reservation',
  templateUrl: './show-reservation.component.html',
  styleUrls: ['./show-reservation.component.css']
})
export class ShowReservationComponent {
  reservedCars: ICar[]=[];
  userId: string|null='';
  constructor(private carReservedService: CarReservedService, private loginService:LoginService) {

    this.userId= localStorage.getItem('idUser');
    this.reservedCars = this.carReservedService.getReservedCars(this.userId) || [];
  }
  deleteCar(car:ICar)
  {
        this.reservedCars=this.carReservedService.deleteReservedCar(this.userId, car);
  }
}
