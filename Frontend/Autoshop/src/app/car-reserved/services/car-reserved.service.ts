import { Injectable } from '@angular/core';
import { ICar } from 'src/app/cars/models/car';

@Injectable({
  providedIn: 'root'
})
export class CarReservedService {
  private reservedCars: ICar[] = [];
  private userId:string|null='';
  private userKey?: string; 
  constructor()
        {
        }


        reserveCar(userId: string|null, car: ICar) {
          const userKey = 'user_' + userId;
          const reservedCars = this.getReservedCarsFromLocalStorage(userKey) || [];
      
          const isDuplicate = reservedCars.some((reservedCar) => reservedCar.idCar === car.idCar);
      
          if (!isDuplicate) {
            reservedCars.push(car);
            this.saveReservedCarsToLocalStorage(userKey, reservedCars);
          }
        }
      
        deleteReservedCar(userId: string|null, car: ICar) {
          const userKey = 'user_' + userId;
          const reservedCars = this.getReservedCarsFromLocalStorage(userKey) || [];
      
          const carIndex = reservedCars.findIndex((reservedCar) => reservedCar.idCar === car.idCar);
      
          if (carIndex !== -1) {
            reservedCars.splice(carIndex, 1);
            this.saveReservedCarsToLocalStorage(userKey, reservedCars);
          }
          return reservedCars;
        }
      
        private saveReservedCarsToLocalStorage(userKey: string|null, reservedCars: ICar[]) {
          if (userKey) {
            localStorage.setItem(userKey, JSON.stringify(reservedCars));
          }
        }
      
        private getReservedCarsFromLocalStorage(userKey: string|null): ICar[] | null {
          if (userKey) {
            const storedReservedCars = localStorage.getItem(userKey);
            if (storedReservedCars) {
              return JSON.parse(storedReservedCars);
            }
          }
          return null;
        }
      
        getReservedCars(userId: string|null): ICar[] | null {
          const userKey = 'user_' + userId;
          return this.getReservedCarsFromLocalStorage(userKey);
        }
}
