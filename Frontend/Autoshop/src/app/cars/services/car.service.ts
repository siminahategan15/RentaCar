import { Injectable } from '@angular/core';
import { ICar } from '../models/car';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }   
  getCars(): Observable<ICar[]>
  {
    return this.http.get<ICar[]>('https://localhost:7074/cars');
  }

  getCar(id: number| undefined): Observable<ICar>
  {
    return this.http.get<ICar>('https://localhost:7074' + `/cars/${id}`);
  }

  deleteCar(id: number| undefined):any
  {
    return this.http.delete<any>('https://localhost:7074' + '/cars/'+ id);
  }

  createCar(car: ICar | undefined):Observable<ICar>
  {
    return this.http.post<ICar>('https://localhost:7074/cars', car);
  }

  updateCar(id:number| undefined,car:ICar | undefined): Observable<ICar> {
    return this.http.put<ICar>('https://localhost:7074'+`/cars/${id}`,car);
}
}
