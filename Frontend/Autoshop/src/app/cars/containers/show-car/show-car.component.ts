import { Component, OnInit } from '@angular/core';
import { ICar } from '../../models/car';
import { CarService } from '../../services/car.service';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-show-car',
  templateUrl: './show-car.component.html',
  styleUrls: ['./show-car.component.css']
})
export class ShowCarComponent implements OnInit{

  car!: ICar;
  constructor(private CarService:CarService, private route: ActivatedRoute){}
  ngOnInit(): void {
    this.getCar();
  }
  getCar()
  {
    const id=this.route.snapshot.params['id'];
    this.CarService.getCar(id).subscribe(response => this.car = response)
  }

  


}
