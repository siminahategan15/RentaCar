import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarReservedService } from 'src/app/car-reserved/services/car-reserved.service';
import { ICar } from 'src/app/cars/models/car';
import { IUser } from '../../models/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-show-reservation2',
  templateUrl: './show-reservation.component.html',
  styleUrls: ['./show-reservation.component.css']
})
export class ShowReservationComponent {
  reservedCars: ICar[]=[];
  userId: string|null='';
  user!:IUser;
  name:string='';
  constructor(private route: ActivatedRoute, private carReservedService: CarReservedService,private UserService:UsersService) {
    this.getUser(); 
  }
  ngOnInit(): void {
    this.getReservation();
  
  }

  getReservation(){
    const userId=this.route.snapshot.params['id'];
    this.reservedCars = this.carReservedService.getReservedCars(userId) || [];
  }
  getUser()
  {
    const userId=this.route.snapshot.params['id'];
    this.UserService.getUser(userId).subscribe(response => {this.user = response
      this.name=this.user!.firstName});
  }
  
}
