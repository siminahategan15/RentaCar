import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable, isEmpty } from 'rxjs';
import { CarService } from '../../services/car.service';
import { ICar } from '../../models/car';
import { Router } from '@angular/router';
import { FormBuilder, FormControl,  FormGroup } from '@angular/forms';
import { CarReservedService } from 'src/app/car-reserved/services/car-reserved.service';
import { LoginService } from 'src/app/login/services/login.service';

@Component({
  selector: 'app-index-cars',
  templateUrl: './index-cars.component.html',
  styleUrls: ['./index-cars.component.css']
})
export class IndexCarsComponent implements OnInit {

  cars!: ICar[];
//adaugare
carForm: FormGroup;
  editingCar: ICar|null=null;
  userRole:string|null='';
  userId:string|null='';
  reservedCars: ICar[] = [];
constructor(
    private carService:CarService,
    private router:Router,
    private formBuilder: FormBuilder,
    private cdr:ChangeDetectorRef,
    private carReservedService: CarReservedService,

    ){

      this.carForm = this.formBuilder.group({
        brand: '',
        model: '',
        productionYear: 0,
        stock: 0,
      });
      this.userId = localStorage.getItem('idUser');
      this.userRole = localStorage.getItem('role');
    
    }
  

  ngOnInit(): void {
    this.carService.getCars().subscribe(res => {
      this.cars =res;
   
   });
   this.reservedCars = this.carReservedService.getReservedCars(this.userId) || [];
   }

   onFormSubmit() {
    if (!this.editingCar) {
      this.createCar();
    } else {
      this.updateCar();
    }
  }

   showCar(car: ICar)
   {
    this.router.navigate([`/cars/${car.idCar}`]);
   }
  
  createCar() {
    const carData = this.carForm.value;
    this.carService.createCar(carData).subscribe(
      (res) => {
        this.cars.push(res);
        this.carForm.reset(); // Reset the form after a successful create
      },
      (error) => {
        console.error('Error creating car:', error);
      }
    );
}


  deleteCar(car: ICar)
  {
    this.carService.deleteCar(car.idCar).subscribe(
      (res: any)=> {
        const carIndex = this.cars.indexOf(car);
        this.cars.splice(carIndex,1);
      }
    )
  }
  
  updateCar() {
    if (this.editingCar) {
      const updatedCarData = this.carForm.value;
      this.carService.updateCar(this.editingCar.idCar, updatedCarData).subscribe(
        (res) => {
         
          const carIndex = this.cars.findIndex((c) => c.idCar === this.editingCar!.idCar);
          if (carIndex !== -1) {
            this.cars[carIndex] = { ...this.cars[carIndex], ...updatedCarData };
           
          }
          this.editingCar = null;
          this.carForm.reset();
        },
        (error) => {
          console.error('Error updating car:', error);
        }
      );
    }
  }

  editCar(car: ICar) {
    this.editingCar = { ...car };
    this.carForm.patchValue(this.editingCar);
  }
  
  reserveCar(car: ICar) {
    this.carReservedService.reserveCar(this.userId, car); // Pass the user ID
  }

}
