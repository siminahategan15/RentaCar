import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CarService } from '../../services/car.service';
import { ICar } from '../../models/car';
import { Router } from '@angular/router';
import { FormBuilder, FormControl,  FormGroup } from '@angular/forms';

@Component({
  selector: 'app-index-cars',
  templateUrl: './index-cars.component.html',
  styleUrls: ['./index-cars.component.css']
})
export class IndexCarsComponent implements OnInit {

  cars!: ICar[];
//adaugare
  
  
  brand2:string='';
  model2:string='';
  productionYear2=0;
  stock2=0;
  checkoutForm:FormGroup;

constructor(
    private carService:CarService,
    private router:Router,
    private formBuilder: FormBuilder,
    ){
      this.checkoutForm=this.formBuilder.group({

        brand:'',
        model:'',
        productionYear:0,
        stock:0
      });
    
    }
  

  ngOnInit(): void {
    this.carService.getCars().subscribe(res => {
      this.cars =res;
    console.log(res);
    this.checkoutForm.patchValue(res[0]);
   }
  
    )
   }

   showCar(car: ICar)
   {
    this.router.navigate([`/cars/${car.idCar}`]);
   }
  
  createCar() {
   
     let car:ICar={
      
      brand:this.brand2,
    model:this.model2,
    productionYear: this.productionYear2,
    stock:this.stock2

    };

// this will be replaced with form value
  this.carService.createCar(car).subscribe(
    res => this.cars.push(res), 
  );
}

onSubmit(): void {
      // Process checkout data here

        this.brand2= this.checkoutForm.get('brand')?.value;

        this.stock2= this.checkoutForm.get('stock')?.value;
        this.productionYear2= this.checkoutForm.get('productionYear')?.value;
        this.model2= this.checkoutForm.get('model')?.value;
;      
      this.createCar();
      console.warn('The car has been created', this.checkoutForm.value);
      this.checkoutForm.reset();
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


  updateCar(car:ICar)
  {
    const updatedCar: ICar = {
    brand:this.brand2,
    model:this.model2,
    productionYear: this.productionYear2,
    stock:this.stock2
    };
    this.carService.updateCar(car.idCar, updatedCar).subscribe(
      res => {
        this.checkoutForm.patchValue(car);
      }
    );
    }

}
