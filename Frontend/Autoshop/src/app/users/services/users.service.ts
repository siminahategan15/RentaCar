import { Injectable } from '@angular/core';
import { IUser } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
    getUsers(): Observable<IUser[]>
  {
    return this.http.get<IUser[]>('https://localhost:7074/users');
  }

  getUser(id: number| undefined): Observable<IUser>
  {
    return this.http.get<IUser>('https://localhost:7074' + `/users/${id}`);
  }

  deleteUser(id: number| undefined):any
  {
    return this.http.delete<any>('https://localhost:7074' + '/users/'+ id);
  }

  createUser(user: IUser | undefined):Observable<IUser>
  {
    return this.http.post<IUser>('https://localhost:7074/users', user);
  }

  updateUser(id:number| undefined,user:IUser | undefined): Observable<IUser> {
    return this.http.put<IUser>('https://localhost:7074'+`/users/${id}`,user);
}
  
}
